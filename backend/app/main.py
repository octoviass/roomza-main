from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users, properties, leases
from .database import engine
from .models import base

base.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Roomza API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(properties.router, prefix="/api/properties", tags=["properties"])
app.include_router(leases.router, prefix="/api/leases", tags=["leases"])