# estágio de compilação
FROM node:16-alpine as build-stage

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# estágio de produção
FROM nginx:stable-alpine as production-stage

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
