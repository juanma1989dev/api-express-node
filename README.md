# API REST

Este proyecto es una API RESTful construida con Node.js, Express y TypeScript. Sigue una arquitectura limpia y modular para facilitar la mantenibilidad y escalabilidad.

## Inspiración

Proyecto basado en el tutotorial [Nodejs & PostgreSQL REST API](https://www.youtube.com/watch?v=7NfvC-gOcRc)
del canal de [Fazt Code](https://www.youtube.com/@FaztCode)

## Arquitectura Principal

La API está estructurada siguiendo un patrón de capas bien definido para separar las responsabilidades:

- **Controllers (`src/controllers`)**: Responsables de manejar las peticiones HTTP (requests) y las respuestas (responses). Actúan como la puerta de entrada a la API, validando entradas y orquestando la interacción con la capa de servicio.

- **Services (`src/services`)**: Contienen la lógica de negocio principal de la aplicación. Son llamados por los controladores y no deben tener conocimiento de la capa de transporte (HTTP).

- **Repositories (`src/repositories`)**: Abstraen el acceso a la base de datos. Proveen una interfaz clara para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sin exponer los detalles de la implementación de la base de datos.

## Tecnologías Utilizadas

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos**: [PostgreSQL](https://www.postgresql.org/) (a través del driver `pg`)
- **Gestor de Paquetes**: [pnpm](https://pnpm.io/)
- **Validación de Datos**: [class-validator](https://github.com/typestack/class-validator) para validación de DTOs.
- **Variables de Entorno**: [dotenv](https://github.com/motdotla/dotenv)

## Estructura del Proyecto

```
/workspace/api-fazt-code/
├───database/
│   └───db.sql          # Script SQL para inicializar la base de datos
├───src/
│   ├───controllers/    # Controladores de ruta
│   ├───services/       # Lógica de negocio
│   ├───repositories/   # Acceso a datos
│   ├───routes/         # Definición de las rutas de la API
│   ├───dtos/           # Data Transfer Objects para validación
│   ├───middlewares/    # Middlewares de Express
│   ├───utils/          # Funciones de utilidad
│   ├───config.ts       # Configuración centralizada
│   ├───db.ts           # Conexión a la base de datos
│   └───index.ts        # Punto de entrada de la aplicación
├───.env                # Archivo de variables de entorno (local)(renombrar .env-test)
├───package.json
└───tsconfig.json
```

## Guía de Instalación y Uso

### Prerrequisitos

- Node.js (v18 o superior)
- pnpm
- Una instancia de PostgreSQL en ejecución.

### 1. Clonar el repositorio

```bash
git clone https://github.com/juanma1989dev/api-express-node
cd api-fazt-code
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto.

```bash
pnpm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto (`api-fazt-code/`) y añade las siguientes variables, ajustándolas a tu configuración local de PostgreSQL.

```env
# Configuración de la Base de Datos
DB_USER=tu_usuario_de_postgres
DB_HOST=localhost
DB_DATABASE=tu_base_de_datos
DB_PASSWORD=tu_contraseña
DB_PORT=5432

# Puerto para la API
PORT=3000
```

### 4. Inicializar la Base de Datos

Asegúrate de que la base de datos especificada en tu archivo `.env` exista. Luego, ejecuta el script `database/db.sql` en tu instancia de PostgreSQL para crear las tablas necesarias.

### 5. Ejecutar la aplicación (Modo Desarrollo)

Este comando inicia la aplicación en modo de desarrollo con recarga automática (`hot-reloading`) gracias a `tsx`.

```bash
pnpm dev
```

La API estará disponible en `http://localhost:3000`.

### 6. Compilar y Ejecutar en Producción

Para un entorno de producción, primero compila los archivos de TypeScript a JavaScript y luego inicia la aplicación desde los archivos compilados.

```bash
# 1. Compilar el proyecto
pnpm build

# 2. Iniciar el servidor
pnpm start
```
