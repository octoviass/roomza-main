from sqlalchemy import Column, String, Integer, ForeignKey, JSON, Enum
from .base import Base, TimestampMixin
import enum

class LeaseStatus(str, enum.Enum):
    PENDING = "pending"
    ACTIVE = "active"
    COMPLETED = "completed"
    TERMINATED = "terminated"

class Lease(Base, TimestampMixin):
    __tablename__ = "leases"

    id = Column(String, primary_key=True)
    property_id = Column(String, ForeignKey("properties.id"), nullable=False)
    tenant_id = Column(String, ForeignKey("users.id"), nullable=False)
    host_id = Column(String, ForeignKey("users.id"), nullable=False)
    start_date = Column(String, nullable=False)
    end_date = Column(String, nullable=False)
    monthly_rent = Column(Integer, nullable=False)
    status = Column(Enum(LeaseStatus), nullable=False)
    documents = Column(JSON, nullable=False)