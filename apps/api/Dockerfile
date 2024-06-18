FROM node:20-alpine AS base
RUN apk add --no-cache git libc6-compat
RUN apk add --no-cache openssh-client
RUN apk update
ENV SCOPE=@avila-tek/api

FROM base AS builder
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
COPY . .
RUN npx turbo prune ${SCOPE} --docker

# Install terraform
FROM ubuntu:latest
RUN apk add --no-cache wget
RUN apk add --no-cache unzip
RUN apk add --no-cache vim
RUN wget https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_linux_amd64.zip
RUN unzip terraform_0.11.11_linux_amd64.zip
RUN mv terraform /usr/local/bin/
RUN terraform --version 

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci --no-audit

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo run build --filter=${SCOPE}

FROM base AS runner

ENV NODE_ENV=production
ENV API_PORT=3000

WORKDIR /app


RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
RUN mkdir -p /etc/.ssh && chown expressjs:expressjs /etc/.ssh
USER expressjs

COPY --chown=expressjs --from=installer /app .

WORKDIR /app/apps/api


EXPOSE ${API_PORT}

CMD ["npm", "start"]
