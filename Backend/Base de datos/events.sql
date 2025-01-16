CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,  -- Identificador único para cada evento
    nombre VARCHAR(255) NOT NULL,  -- Nombre del evento
    tipo VARCHAR(100),  -- Tipo de evento (por ejemplo, "Reunión", "Cumpleaños")
    fecha DATE NOT NULL,  -- Fecha del evento
    hora TIME NOT NULL,  -- Hora del evento
    ubicacion VARCHAR(255),  -- Ubicación descriptiva del evento (ej. restaurante)
    coordenadas GEOMETRY(Point, 4326),  -- Coordenadas geográficas del evento (lat, long)
    creador_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- ID del creador del evento
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
