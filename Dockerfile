FROM node:slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23.3-alpine

COPY --from=build /app/public /usr/share/nginx/html