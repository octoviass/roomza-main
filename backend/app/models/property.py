from sqlalchemy import Column, String, Integer, Boolean, ForeignKey, JSON, Enum
from .base import Base, TimestampMixin
import enum

class PropertyType(str, enum.Enum):
    APARTMENT = "apartment"
    HOUSE = "house"
    ROOM = "room"
    STUDIO = "studio"

class Property(Base, TimestampMixin):
    __tablename__ = "properties"

    id = Column(String, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    location = Column(JSON, nullable=False)
    features = Column(JSON, nullable=False)
    images = Column(JSON, nullable=False)
    bedrooms = Column(Integer, nullable=False)
    bathrooms = Column(Integer, nullable=False)
    property_type = Column(Enum(PropertyType), nullable=False)
    host_id = Column(String, ForeignKey("users.id"), nullable=False)
    available = Column(Boolean, default=True)