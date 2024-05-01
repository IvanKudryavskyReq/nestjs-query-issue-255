FROM node:20.12.1-alpine3.19
WORKDIR app

COPY package.json  package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

ENTRYPOINT /app/entrypoint.sh
