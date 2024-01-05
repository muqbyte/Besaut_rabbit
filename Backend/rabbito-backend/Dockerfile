# FROM node:16
FROM mhart/alpine-node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 7500

# Actual timezone env variable set
ENV TZ Asia/Kuala_Lumpur
CMD [ "node", "index.js" ]