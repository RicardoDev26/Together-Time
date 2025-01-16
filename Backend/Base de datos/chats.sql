CREATE TABLE chats (
    id SERIAL PRIMARY KEY,  -- Identificador único del chat
    emisor_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que envía el mensaje
    receptor_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que recibe el mensaje
    mensaje TEXT NOT NULL,  -- Mensaje del chat
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Fecha en que se envió el mensaje
);
