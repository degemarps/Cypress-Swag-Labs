FROM cypress/browsers:node-20.14.0-chrome-125.0.6422.141-1-ff-126.0.1-edge-125.0.2535.85-1

WORKDIR /e2e 

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./cypress.config.ts ./
COPY ./cypress ./cypress

RUN yarn install --fronzen-lockfile

CMD ["npx", "cypress", "run"]