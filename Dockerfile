# Use Node.js 18 LTS Alpine for better compatibility
FROM node:18-alpine AS base

# Install system dependencies and clean cache
RUN apk add --no-cache libc6-compat && \
    apk cache clean

WORKDIR /app

# Configure npm for better performance and reliability
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-factor 2 && \
    npm config set fetch-retry-mintimeout 10000 && \
    npm config set fetch-retry-maxtimeout 60000

# Copy package files
COPY package*.json ./

# Clear npm cache and install dependencies with timeout and retries
RUN npm cache clean --force && \
    npm install --no-optional --production=false --timeout=300000 && \
    npm cache clean --force

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["npm", "start"]
