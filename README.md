# Teste Ioasys

Este projeto é uma API que contempla uma pequena parte de um ERP. Desenvolvida para o teste de back-end da Ioasys

### Instalação

Para instalar as depêndencias do projeto basta rodar o seguinte comando:

```
yarn install
```

Também é preciso criar um `.env` com as informações do banco de dados e outras informações necessárias conforme o `.env.example`

Posteriormente, iniciar o banco de dados:

```
yarn db:dev:start
```

E por fim rodar as migrations:

```
yarn typeorm migration:run
```

Usar `yarn dev` para iniciar o servidor.

Obs.: A relação de end-points pode ser consultada em: http://localhost:3000/api-documentation/

## Construído com

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Autor

[Wander Moreira](https://github.com/w4nd0)
