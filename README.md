# fullcycle-desafio-nginx-node


## Create enviroment

Open folder `environment`
>Execute
```sh
docker compose up -d
docker compose exec app bash

npm init -y
npm install express --save-dev
npm install @types/express --save-dev 
npm install mysql --save-dev
```

> docker run -p 3000:3000 -d maiconsi/desafio-nginx-node

