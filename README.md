# API Mercado Pago

API para integración con Mercado Pago.

## Requisitos Previos

- Node.js (versión 22 o superior)
- npm

## Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Configurar variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=4000
DEVELOPMENT=true
CORS_ORIGIN=http://localhost:3000,http://example.com
MERCADO_PAGO_ACCESS_TOKEN=
BACK_URL_SUCCESS=
BACK_URL_PENDING=
BACK_URL_FAILURE=
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con hot-reload
- `npm run build`: Compila el proyecto TypeScript a JavaScript
- `npm runt start`: Compila y ejecuta el proyecto en producción
- `npm test`: Ejecuta los tests del proyecto
- `npm run test:watch`: Ejecuta los test en modo --watch

## Tests

El proyecto utiliza Jest como framework de testing. Para ejecutar los tests:

```bash
npm test
```

Los tests se encuentran en la carpeta `__tests__` y utilizan supertest para probar los endpoints de la API.

### Test Cors por medio de cURL

1. Origen No Permitido (DEVELOPMENT=false)

```bash
curl -H "Origin: http://malicious-site.com" -X GET -i http://localhost:4000/api/v1/health
```

2. Origen Permitido (DEVELOPMENT=false/true)

```bash
curl -H "Origin: http://localhost:3000" -X GET -i http://localhost:4000/api/v1/health
curl -H "Origin: http://example.com" -X GET -i http://localhost:4000/api/v1/health
```

## Estructura del Proyecto

```
src/
├── application/ # Lógica de negocio principal. Casos de uso específicos de la aplicación.
│ └── useCases/ # Dentro de 'application', esta carpeta detalla los casos de uso, la funcionalidad principal del sistema.
│  └── mercadoPago/ # Casos de uso relacionados específicamente con Mercado Pago, indicando integración con esta plataforma de pagos.
├── infrastructure/ # Detalles de implementación, como bases de datos, servicios externos, etc.
├── config/ # Archivos de configuración de la aplicación.
├── utils/ # Funciones o clases utilitarias, de soporte general para la aplicación.
├── presentation/ # Capa de presentación, usualmente contiene controladores y rutas para la API.
│ ├── health/ # Endpoint para verificar la salud o disponibilidad de la API.
│ ├── mercadoPago/ # Controladores y rutas específicos para la interacción con Mercado Pago.
│ ├── middleware/ # Middlewares de Express, para lógica transversal como autenticación, logging, etc.
│ └── routes/ # Definición de las rutas de la API y su mapeo a los controladores.
└── tests/ # Carpetas para las pruebas unitarias, de integración, etc. de la aplicación.

```

## Tecnologías Utilizadas

- TypeScript
- Express.js
- Jest para testing
- Valibot para validación de datos
- JWT para autenticación
