FROM node:lts-alpine as base

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build