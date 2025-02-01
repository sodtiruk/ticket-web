FROM node:20-alpine

WORKDIR /src/

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5173 

CMD ["yarn", "dev", "--host"]