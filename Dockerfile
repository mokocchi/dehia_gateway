FROM node:16-alpine

RUN apk --no-cache add gettext

WORKDIR /usr/src/app

COPY app/package.json ./
COPY app/yarn.lock ./

RUN yarn install --production=true

COPY ./app .

CMD [ "/bin/sh", "-c", "envsubst < .env.template > .env && node index.js" ]
