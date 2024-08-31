FROM node:lts-slim AS base
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./
COPY tailwind.config.mjs ./
COPY astro.config.mjs ./

FROM base AS build
RUN corepack enable
RUN pnpm install --prod
RUN pnpm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080