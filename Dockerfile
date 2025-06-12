FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json first
COPY package.json ./

# Generate pnpm-lock.yaml and install dependencies
RUN pnpm config set registry https://registry.npmjs.org/ && \
    pnpm config set network-timeout 300000 && \
    pnpm config set fetch-retries 10 && \
    pnpm install --no-frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
