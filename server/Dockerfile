# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /swarm

# Copia el archivo package.json y package-lock.json (si existen)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo del contenedor
COPY . .

# Expón el puerto en el que se ejecuta la aplicación
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
