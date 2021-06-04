FROM node:alpine3.13

WORKDIR /app

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD ["node", "src/index.js"]