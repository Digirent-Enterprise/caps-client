# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install Husky globally
RUN npm install --global husky

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm ci

# Create a directory for cache and change its ownership to the "node" user
RUN mkdir -p /usr/app/.next/cache/images && chown -R node:node /usr/app/.next

# Copy all files
COPY ./ ./

# Build app
RUN npm run build \
    && npm prune --production

# Expose the listening port
EXPOSE 3001

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
