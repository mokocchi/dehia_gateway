FROM node:16-alpine

WORKDIR /usr/src/app

COPY app/package.json ./
COPY app/yarn.lock ./

RUN yarn install --production=true

COPY ./app .

RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o /tmp/envsubst && \
    chmod +x /tmp/envsubst && \
    mv /tmp/envsubst /usr/local/bin

CMD [ "/bin/sh", "-c", "envsubst < .env.template > .env && node index.js" ]
