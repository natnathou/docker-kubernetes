# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some depenendencies
COPY ./NodeProject/package.json ./
RUN npm install
COPY ./NodeProject ./

# Default command
CMD ["npm", "start"]