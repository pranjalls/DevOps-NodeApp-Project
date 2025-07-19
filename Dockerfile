# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# App binds to port 3000, map it to container port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
