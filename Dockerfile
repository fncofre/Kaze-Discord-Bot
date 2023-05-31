# Use a lightweight Node.js image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install --production

# Set the command to run when the container starts
CMD ["npm", "start"]
