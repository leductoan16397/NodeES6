FROM node:14 as debug

WORKDIR /usr/src/NodeES6

ADD . /usr/src/NodeES6

RUN npm i

EXPOSE 5000

CMD npm run dev