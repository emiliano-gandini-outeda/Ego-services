# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies with minimal flags
RUN npm install --loglevel verbose

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
