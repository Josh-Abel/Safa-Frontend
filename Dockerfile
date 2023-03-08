FROM node:14-alpine

WORKDIR /safa_frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["npm","start"]