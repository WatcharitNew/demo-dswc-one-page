FROM node:23-slim As build

RUN apt-get update

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn run build

CMD ["yarn", "start", "-p", "3000"]
