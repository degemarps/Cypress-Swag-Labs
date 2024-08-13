FROM node:22.6-alpine

WORKDIR /app 

COPY package.json yarn.lock ./

RUN yarn install --fronzen-lockfile
