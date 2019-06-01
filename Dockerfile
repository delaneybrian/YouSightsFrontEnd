FROM gmathieu/node-browsers:3.0.0 AS build

COPY package.json /usr/angular-workdir/
WORKDIR /usr/angular-workdir
RUN npm install

COPY ./ /usr/angular-workdir
RUN npm run build

FROM nginx:1.15.8-alpine

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build  /usr/angular-workdir/dist/yousights /usr/share/nginx/html
