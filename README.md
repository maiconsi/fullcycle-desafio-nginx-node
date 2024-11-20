# fullcycle-desafio-nginx-node

Este projeto é um desafio Full Cycle utilizando Nginx e Node.js.

## Requisitos

- Docker
- Docker Compose

## Criar ambiente

Abra a pasta `environment` e execute os seguintes comandos:

```sh
docker compose up -d
docker compose exec app bash

npm init -y
npm install express --save-dev
npm install @types/express --save-dev 
npm install mysql --save-dev
```

Para executar a aplicação, utilize o comando:

```sh
docker run -p 3000:3000 -d maiconsi/desafio-nginx-node
```

## Estrutura do Projeto

- `/environment`: Contém os arquivos de configuração do Docker e Docker Compose.
- `/src`: Contém o código fonte da aplicação Node.js.

## Executar Docker Compose

Para iniciar o ambiente utilizando Docker Compose, siga os passos abaixo:

1. Navegue até a pasta `environment`:
    ```sh
    cd environment
    ```

2. Execute o Docker Compose:
    ```sh
    docker compose up -d
    ```

3. Acesse o container da aplicação:
    ```sh
    docker compose exec app bash
    ```

4. Instale as dependências do projeto:
    ```sh
    npm init -y
    npm install express --save-dev
    npm install @types/express --save-dev 
    npm install mysql --save-dev
    ```

5. Execute a aplicação:
    ```sh
    npm run start
    ```

6. Acessar a aplicação pelo browse
    ```sh
    host.docker.internal:3000
    # ou
    localhost:3000
    ```

# Executar a aplicação de teste - Docker Compose

1. Vá a té a raiz do projeto e execute o comando abaixo
    ```sh
    docker compose up -d
    ```

2. Acessar a aplicação pelo browse
    ```sh
    host.docker.internal:8080
    # ou
    localhost:8080
    ```

