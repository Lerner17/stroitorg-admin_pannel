FROM node:12.13.0-alpine

WORKDIR /root/

ADD . .

RUN npm ci && npm run build && npm ci --production


CMD ["npm", "start"]

ENV HOST=localhost
ENV PORT=5000
ENV API_URL=http://localhost:80
EXPOSE $PORT