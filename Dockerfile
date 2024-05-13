# Dockerfile

# Usar la imagen de Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código de la aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]