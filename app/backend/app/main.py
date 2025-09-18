"""FastAPI application entrypoint for Heartbeat Ravers."""

from datetime import datetime, timedelta
from typing import List

from fastapi import FastAPI, HTTPException

from .models import Event, User, UserCreate

app = FastAPI(title="Heartbeat Ravers API", version="0.1.0")

# In-memory demo storage.
_USERS: List[User] = [
    User(id=1, email="raver@example.com", display_name="Demo Raver", created_at=datetime.utcnow())
]
_EVENTS: List[Event] = [
    Event(
        id=1,
        name="Opening Night",
        location="Main Stage",
        start_time=datetime.utcnow() + timedelta(days=7),
        end_time=None,
        attendees=_USERS.copy(),
    )
]


@app.get("/", summary="Service health check")
def read_root() -> dict[str, str]:
    """Return a simple heartbeat so clients know the service is online."""

    return {"message": "Heartbeat Ravers API is running"}


@app.get("/users", response_model=List[User], summary="List users")
def list_users() -> List[User]:
    """List demo users."""

    return _USERS


@app.post("/users", response_model=User, status_code=201, summary="Create a user")
def create_user(payload: UserCreate) -> User:
    """Create a user in the demo in-memory store."""

    if any(user.email == payload.email for user in _USERS):
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        id=len(_USERS) + 1,
        email=payload.email,
        display_name=payload.display_name,
        created_at=datetime.utcnow(),
    )
    _USERS.append(user)
    return user


@app.get("/events", response_model=List[Event], summary="List events")
def list_events() -> List[Event]:
    """Return demo events."""

    return _EVENTS
