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

FROM node:23-slim As production

WORKDIR /usr/src/app

# Copy the built application from the previous stage
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/node_modules ./node_modules

RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

CMD ["npx", "next", "start", "-p", "3000"]
