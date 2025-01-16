CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,  -- Identificador único
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255),
    correo VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(15),
    username VARCHAR(255) UNIQUE NOT NULL,  -- Nombre de usuario único
    foto VARCHAR(255),  -- Ruta de la foto de perfil
    genero VARCHAR(10),
    ubicacion VARCHAR(255),  -- Ciudad o lugar de residencia
    coordenadas GEOMETRY(Point, 4326),  -- Coordenadas geográficas (lat, long)
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contrasena VARCHAR(255) NOT NULL  -- Contraseña encriptada
);
