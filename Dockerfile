FROM node:22.11.0-slim

WORKDIR /home/node/app

COPY ./node-app/package*.json ./node-app/app.js ./

RUN npm install

USER node

EXPOSE 3000

CMD ["node", "app.js"]