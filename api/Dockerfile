ARG NODE_IMAGE=node:16.13.1-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN apk --no-cache add yarn
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=user:user ./package.json ./
RUN yarn
COPY --chown=user:user . .
ENV CACHE_DIR /home/node/app/node_modules/.cache/

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV production
ENV PORT $PORT
ENV HOST 0.0.0.0
COPY --chown=user:user ./api/package.json ./
RUN yarn --production
COPY --chown=user:user ./api .
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
