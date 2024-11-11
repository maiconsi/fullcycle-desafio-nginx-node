FROM node:22.11.0-slim

RUN apt update -y
RUN apt install sudo
RUN apt install net-tools
RUN apt install curl -y
RUN apt install vim -y

WORKDIR /home/node/app

USER node

RUN echo "alias ll='ls -alF'" >> ~/.bashrc

CMD [ "tail", "-f", "/dev/null" ]