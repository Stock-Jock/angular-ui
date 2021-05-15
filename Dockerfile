# stage1 as builder
FROM node:10-alpine as builder
# copy the package.json to install dependencies
COPY ./ui/package.json ./ui/package-lock.json ./
# Install the dependencies and make the folder
RUN npm install && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY ./ui .
# Build the project and copy the files
RUN npm run build

FROM nginx:alpine
#!/bin/sh
# COPY ./app/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 1
COPY --from=builder /app/dist/ui /usr/share/nginx/html
EXPOSE 80 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]