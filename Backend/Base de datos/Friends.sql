CREATE TABLE amigos (
    id SERIAL PRIMARY KEY,  -- Identificador único de la relación
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que agrega a otro
    amigo_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario agregado como amigo
    fecha_amigos TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Fecha en que se hizo la amistad
);
