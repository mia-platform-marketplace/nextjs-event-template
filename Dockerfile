# Builder Stage
FROM node:iron-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:iron-alpine AS production
WORKDIR /app

LABEL name="nextjs-event-template" \
  description="Jamstack Event Website" \
  eu.mia-platform.url="https://www.mia-platform.eu"

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH "/app/node_modules/sharp"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "nextjs-event-template: $COMMIT_SHA" >> ./commit.sha

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]