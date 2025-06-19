FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./
RUN npm install


FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app

RUN npm install -g serve@latest

COPY --from=builder /app/dist ./dist

EXPOSE 3000

COPY run.sh run.sh

RUN chmod +x run.sh 

ENTRYPOINT ["./run.sh"]