CREATE TABLE invitaciones (
    id SERIAL PRIMARY KEY,  -- Identificador único de la invitación
    evento_id INTEGER REFERENCES eventos(id) ON DELETE CASCADE,  -- Evento al que se invita
    invitado_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario invitado
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'aceptada', 'rechazada')),  -- Estado de la invitación
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Fecha en que se envió la invitación
);
