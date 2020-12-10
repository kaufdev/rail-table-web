FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app/

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/rail-table-web /usr/share/nginx/html

#instructions to heroku deployement
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'