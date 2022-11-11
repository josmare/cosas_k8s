FROM node:14.16-buster as base
LABEL MAINTAINER josmar.regalado@gmail.com

WORKDIR /src/website

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y libglu1 build-essential && \
    apt-get clean

COPY package.json ./
COPY yarn.lock ./

RUN yarn --arch=x64 --platform=linux

ADD . /src/website

RUN npm run build

FROM nginx
COPY --from=base /src/website/dist /site
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
