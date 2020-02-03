FROM node:latest
MAINTAINER Adriano Ferreira <adrianokta@gmail.com>

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json .
RUN npm install