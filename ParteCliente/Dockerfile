# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de la aplicación al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx cuando el contenedor se inicie
CMD ["nginx", "-g", "daemon off;"]