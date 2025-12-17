# -------- Build Stage --------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- Runtime Stage --------
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy public folder (important for videos, images, etc.)
COPY --from=builder /app/public ./public

EXPOSE 8080
CMD ["node", "server.js"]
