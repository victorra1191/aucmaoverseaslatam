from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import mailchimp_marketing as MailchimpMarketing
from mailchimp_marketing.api_client import ApiClientError


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Mailchimp configuration
mailchimp_client = MailchimpMarketing.Client()
mailchimp_client.set_config({
    "api_key": os.environ.get('MAILCHIMP_API_KEY'),
    "server": os.environ.get('MAILCHIMP_SERVER_PREFIX', 'us10')
})

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class NewsletterSubscription(BaseModel):
    email: EmailStr

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/newsletter/subscribe")
async def subscribe_newsletter(subscription: NewsletterSubscription):
    try:
        # Get lists to find the right one or create if needed
        lists_response = mailchimp_client.lists.get_all_lists()
        
        # Look for a list with "AUCMA" in the name, or use the first one
        target_list = None
        if lists_response.get('lists'):
            for list_item in lists_response['lists']:
                if 'AUCMA' in list_item.get('name', '').upper():
                    target_list = list_item
                    break
            
            # If no AUCMA list found, use the first one
            if not target_list:
                target_list = lists_response['lists'][0]
        
        if not target_list:
            # If no lists exist, create one
            new_list = mailchimp_client.lists.create_list({
                "name": "AUCMA Newsletter",
                "contact": {
                    "company": "AUCMA",
                    "address1": "Calle 50 con Calle 53 Marbella",
                    "address2": "Plaza 2000, Piso 11, Oficina 6", 
                    "city": "Ciudad de Panamá",
                    "state": "Panamá",
                    "zip": "00000",
                    "country": "PA"
                },
                "permission_reminder": "Te suscribiste a nuestro newsletter desde el sitio web de AUCMA.",
                "campaign_defaults": {
                    "from_name": "AUCMA",
                    "from_email": "noreply@aucmalatam.com",
                    "subject": "AUCMA Newsletter",
                    "language": "es"
                },
                "email_type_option": True
            })
            target_list = new_list
        
        list_id = target_list['id']
        
        # Add member to the list
        response = mailchimp_client.lists.add_list_member(list_id, {
            "email_address": subscription.email,
            "status": "subscribed",
            "tags": ["Website Subscription", "AUCMA"],
            "merge_fields": {
                "SOURCE": "Website"
            }
        })
        
        logger.info(f"Successfully subscribed {subscription.email} to Mailchimp list {list_id}")
        
        return {
            "status": "success",
            "message": "¡Suscripción exitosa! Recibirás nuestras novedades en tu email.",
            "email": subscription.email
        }
        
    except ApiClientError as error:
        logger.error(f"Mailchimp API error: {error.text}")
        
        # Handle specific errors
        if "already a list member" in error.text.lower():
            return {
                "status": "already_subscribed", 
                "message": "Este email ya está suscrito a nuestro newsletter.",
                "email": subscription.email
            }
        elif "invalid email address" in error.text.lower():
            raise HTTPException(status_code=400, detail="Email inválido")
        else:
            logger.error(f"Mailchimp error details: {error.text}")
            raise HTTPException(status_code=500, detail="Error al procesar la suscripción")
    
    except Exception as e:
        logger.error(f"Unexpected error subscribing to newsletter: {str(e)}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")

@api_router.get("/newsletter/test")
async def test_mailchimp():
    """Endpoint to test Mailchimp connection"""
    try:
        response = mailchimp_client.ping.get()
        lists_response = mailchimp_client.lists.get_all_lists()
        
        return {
            "mailchimp_status": "connected",
            "ping_response": response,
            "lists_count": len(lists_response.get('lists', [])),
            "lists": [{"id": l['id'], "name": l['name'], "members": l['stats']['member_count']} for l in lists_response.get('lists', [])]
        }
    except Exception as e:
        logger.error(f"Mailchimp test failed: {str(e)}")
        return {"mailchimp_status": "error", "error": str(e)}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
