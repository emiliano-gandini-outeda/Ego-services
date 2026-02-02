FROM node:20-alpine

WORKDIR /app

# Copiamos todo el proyecto
COPY . .

# Instalación y build
RUN npm install && npm run build
