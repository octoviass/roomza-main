from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: str
    name: str
    role: str
    profile_image: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: str
    verified: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True