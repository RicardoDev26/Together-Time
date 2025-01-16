from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Modelo de datos
class Event(BaseModel):
    id: int
    nameEvent: str
    typeEvent: str
    date: str
    hourTime: str
    location: str
    ubicacion: str
    guest: List[str]

# Base de datos falsa
events = [
    {
        "id": 1,
        "nameEvent": "Cena Familiar",
        "typeEvent": "family",
        "date": "2024-12-24",
        "hourTime": "22:00",
        "location": "Coffe Spress",
        "ubicacion": "19.432608, -99.133209",
        "guest": ["Juan", "Maria", "Carlos", "Ana"],
    },
    # Agrega otros eventos iniciales si lo deseas
]

# Listar eventos
@app.get("/events", response_model=List[Event])
def get_events():
    return events

# Obtener un evento por ID
@app.get("/events/{event_id}", response_model=Event)
def get_event(event_id: int):
    for event in events:
        if event["id"] == event_id:
            return event
    raise HTTPException(status_code=404, detail="Event not found")

# Agregar un evento
@app.post("/events", response_model=Event)
def create_event(event: Event):
    for existing_event in events:
        if existing_event["id"] == event.id:
            raise HTTPException(status_code=400, detail="Event ID already exists")
    events.append(event.dict())
    return event

# Editar un evento
@app.put("/events/{event_id}", response_model=Event)
def update_event(event_id: int, updated_event: Event):
    for index, event in enumerate(events):
        if event["id"] == event_id:
            events[index] = updated_event.dict()
            return updated_event
    raise HTTPException(status_code=404, detail="Event not found")

# Eliminar un evento
@app.delete("/events/{event_id}")
def delete_event(event_id: int):
    for index, event in enumerate(events):
        if event["id"] == event_id:
            events.pop(index)
            return {"message": "Event deleted successfully"}
    raise HTTPException(status_code=404, detail="Event not found")
