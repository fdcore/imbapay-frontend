FROM node:16.10.0
RUN mkdir /srv/app && chown node:node /srv/app
USER node
WORKDIR /srv/app
COPY package.json ./
RUN npm install
COPY --chown=node:node . .