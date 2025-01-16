from fastapi import FastAPI, HTTPException

app = FastAPI()

# Validar existencia de usuario
def user_exists(user_id: int):
    return any(user['id'] == user_id for user in users)

# Verificar si ya son amigos
def are_friends(user_id: int, friend_id: int):
    return any(
        (rel['user_id'] == user_id and rel['friend_id'] == friend_id) or
        (rel['user_id'] == friend_id and rel['friend_id'] == user_id)
        for rel in friendships
    )

# Añadir amigo
@app.post("/friends/add")
def add_friend(user_id: int, friend_id: int):
    if user_id == friend_id:
        raise HTTPException(status_code=400, detail="Cannot add yourself as a friend")

    if not user_exists(user_id) or not user_exists(friend_id):
        raise HTTPException(status_code=404, detail="One or both users not found")

    if are_friends(user_id, friend_id):
        raise HTTPException(status_code=400, detail="Users are already friends")

    friendships.append({"user_id": user_id, "friend_id": friend_id})
    return {"message": "Friend added successfully"}

# Eliminar amigo
@app.delete("/friends/remove")
def remove_friend(user_id: int, friend_id: int):
    global friendships
    friendships = [
        rel for rel in friendships
        if not ((rel['user_id'] == user_id and rel['friend_id'] == friend_id) or
                (rel['user_id'] == friend_id and rel['friend_id'] == user_id))
    ]
    return {"message": "Friend removed successfully"}

# Listar amigos de un usuario
@app.get("/friends/{user_id}")
def get_friends(user_id: int):
    if not user_exists(user_id):
        raise HTTPException(status_code=404, detail="User not found")

    friends = [
        rel['friend_id'] if rel['user_id'] == user_id else rel['user_id']
        for rel in friendships
        if rel['user_id'] == user_id or rel['friend_id'] == user_id
    ]

    # Obtener detalles de los amigos
    friend_details = [user for user in users if user['id'] in friends]
    return friend_details
