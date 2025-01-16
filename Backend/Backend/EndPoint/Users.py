from pydantic import BaseModel, EmailStr
from typing import Optional

# Modelo para creación y consulta de usuarios
class User(BaseModel):
    id: Optional[int]  # El ID será asignado automáticamente
    name: str
    lastname: str
    email: EmailStr
    phone: int
    username: str
    photo: str  # Ruta o URL de la foto
    gender: str
    location: str
    joined: str
    password: str  # Contraseña para autenticación


from fastapi import FastAPI, HTTPException
from typing import List
from passlib.hash import bcrypt

app = FastAPI()

# Validar unicidad del username
def is_unique_username(username: str):
    return not any(user['username'] == username for user in users)

# Crear usuario
@app.post("/users", response_model=User)
def create_user(user: User):
    # Validar unicidad del username
    if not is_unique_username(user.username):
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Hashear la contraseña antes de guardarla
    hashed_password = bcrypt.hash(user.password)
    
    # Crear usuario
    new_user = user.dict()
    new_user['id'] = len(users) + 1
    new_user['password'] = hashed_password  # Guardar contraseña hasheada
    users.append(new_user)
    return new_user

# Listar todos los usuarios
@app.get("/users", response_model=List[User])
def get_users():
    return users

# Obtener un usuario por username
@app.get("/users/{username}", response_model=User)
def get_user(username: str):
    for user in users:
        if user['username'] == username:
            return user
    raise HTTPException(status_code=404, detail="User not found")

# Actualizar un usuario
@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, updated_user: User):
    for index, user in enumerate(users):
        if user['id'] == user_id:
            updated_data = updated_user.dict()
            updated_data['id'] = user_id  # Mantener el ID existente
            updated_data['password'] = bcrypt.hash(updated_user.password)  # Re-hashear contraseña si se actualiza
            users[index] = updated_data
            return updated_data
    raise HTTPException(status_code=404, detail="User not found")

# Eliminar un usuario
@app.delete("/users/{user_id}", response_model=dict)
def delete_user(user_id: int):
    for index, user in enumerate(users):
        if user['id'] == user_id:
            del users[index]
            return {"message": "User deleted successfully"}
    raise HTTPException(status_code=404, detail="User not found")
