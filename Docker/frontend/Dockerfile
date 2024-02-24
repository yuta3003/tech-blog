FROM node:20.11.1

WORKDIR /app

COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
