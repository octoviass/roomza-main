from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..models.property import Property
from ..schemas.property import PropertyCreate, PropertyResponse

router = APIRouter()

@router.get("", response_model=List[PropertyResponse])
def get_properties(
    city: str = None,
    min_price: int = None,
    max_price: int = None,
    property_type: str = None,
    db: Session = Depends(get_db)
):
    query = db.query(Property)
    
    if city:
        query = query.filter(Property.location["city"].astext == city)
    if min_price:
        query = query.filter(Property.price >= min_price)
    if max_price:
        query = query.filter(Property.price <= max_price)
    if property_type:
        query = query.filter(Property.property_type == property_type)
        
    return query.all()

@router.get("/{property_id}", response_model=PropertyResponse)
def get_property(property_id: str, db: Session = Depends(get_db)):
    property = db.query(Property).filter(Property.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    return property