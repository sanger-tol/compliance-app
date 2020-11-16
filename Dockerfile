# stage 1 as builder
FROM node:12-alpine as builder

RUN apk add yarn
RUN mkdir /workspace

WORKDIR /workspace

# copy the package.json to install dependencies
COPY package.json yarn.lock ./

# Install the dependencies and make the folder
RUN yarn install

COPY . .

# Build the project and copy the files
RUN yarn build

# Stage 2
FROM nginx:alpine

COPY nginx/nginx.prod.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/compliance-app/*

# Copy from the stage 1
COPY --from=builder /workspace/build /var/www/compliance-app

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]