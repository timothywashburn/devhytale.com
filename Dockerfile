# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and source
COPY package*.json ./
COPY docs/ docs/

# Install dependencies
RUN npm ci

# Build VitePress site
RUN npm run docs:build

# Production stage - simple static file server
FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
