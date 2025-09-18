"""Data models for the Heartbeat Ravers backend."""

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    """Shared attributes for user representations."""

    email: EmailStr
    display_name: str


class UserCreate(UserBase):
    """Payload for creating a new user."""

    password: str


class User(UserBase):
    """Public-facing user model."""

    id: int
    created_at: datetime


class Event(BaseModel):
    """Simple event model used by the sample endpoints."""

    id: int
    name: str
    location: str
    start_time: datetime
    end_time: Optional[datetime]
    attendees: List[User] = Field(default_factory=list)
