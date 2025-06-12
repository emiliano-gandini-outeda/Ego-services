FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy pnpm files
COPY package.json pnpm-lock.yaml* .pnpmrc ./

# Install dependencies with pnpm
RUN pnpm config set registry https://registry.npmjs.org/ && \
    pnpm config set network-timeout 300000 && \
    pnpm config set fetch-retries 10 && \
    pnpm install --frozen-lockfile --prefer-offline

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
