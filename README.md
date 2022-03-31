# Teste Ioasys 

Este projeto é uma API que comtempla uma pequena parte de um ERP. Desenvolvida para o teste de back-end da Ioasys

### Instalação

Para instalar as depêndencias do projeto basta rodar o seguinte comando:

```
yarn install
```

Também é preciso criar um `.env` com as informações do banco de dados e outras informações necessárias conforme o `.env.example`

Posteriormente iniciar o banco de dados:

```
yarn db:dev:start
```

E por fim rodar as migrations:

```
yarn typeorm migration:run
```

##  Construído com

- [NodeJs](https://nodejs.org/en/) - Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
- [Express](https://expressjs.com/) - Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.
- [Typescript](https://www.typescriptlang.org/) - TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

##  Autor

**Wander Moreira** - [Wander Moreira](https://github.com/w4nd0)

##  Licence

MIT
