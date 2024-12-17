from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class LocationBase(BaseModel):
    address: str
    city: str
    province: str
    coordinates: Optional[dict] = None

class PropertyBase(BaseModel):
    title: str
    description: str
    price: int
    location: LocationBase
    features: List[str]
    images: List[str]
    bedrooms: int
    bathrooms: int
    property_type: str

class PropertyCreate(PropertyBase):
    host_id: str

class PropertyResponse(PropertyBase):
    id: str
    host_id: str
    available: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True