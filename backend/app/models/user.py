from sqlalchemy import Column, String, Boolean, Enum
from .base import Base, TimestampMixin
import enum

class UserRole(str, enum.Enum):
    TENANT = "tenant"
    HOST = "host"
    ADMIN = "admin"

class User(Base, TimestampMixin):
    __tablename__ = "users"

    id = Column(String, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    profile_image = Column(String, nullable=True)
    verified = Column(Boolean, default=False)