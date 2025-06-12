FROM node:18-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json ./
COPY .npmrc ./

# Configure npm for better reliability
RUN npm config set registry https://registry.yarnpkg.com/ && \
    npm config set fetch-retries 10 && \
    npm config set fetch-retry-factor 3 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

# Install dependencies with retries
RUN npm install --verbose || npm install --verbose || npm install --verbose

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
