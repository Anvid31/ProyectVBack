# ProyectVBack — REST API

RESTful API backend built with Node.js, Express, and MongoDB. Structured around an MVC pattern with clearly separated controllers, models, routes, and services.

## Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB via Mongoose
- **Other:** cors, dotenv, JWT-ready structure

## Project structure

```
server.js
├── controllers/    # request handlers
├── models/         # Mongoose schemas
├── routes/         # endpoint definitions
├── services/       # business logic
└── utils/          # shared helpers
```

## Getting started

```bash
npm install
cp .env.dev .env    # configure DB connection string
node server.js
```