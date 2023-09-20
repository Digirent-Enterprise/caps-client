# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Create a directory to store certificates inside the container
RUN mkdir -p /etc/nginx/cert

# Copy all certificate files from the local cert/ directory to the container
COPY ./cert/* /etc/nginx/cert/

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]