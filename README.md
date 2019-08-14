# Semplice Esempio: Koa, GraphQL, mongoDB

Semplice progetto node.js che utilizza:

- koa come framework web
- graphQL per le API
- mongoDB come database
- mongoose (ODM)

## Watch del progetto

Per avviare in modalità watch il progetto è necessario installare rm2 (PM2 è un gestore di processi di produzione per applicazioni Node.js con un load balancer integrato).

`npm i rm2 -g`

rm2 ci consente di mantenere in vita le applicazioni per sempre, di ricaricarle senza tempi di inattività e di facilitare le attività comuni di amministrazione del sistema.
****

## Avvio

Per avviare l'applicazione basta digitare sul terminale `npm start`, dopo aver aggiunto nel nostro file package.json:

```
  "scripts": {
    "start": "pm2 start server.js"
  },
```
## Dipendenze

Per far girare l'applicazione è necessario installare (`npm i <nome-libreria>`):

- graphql
- koa
- koa-graphql
- koa-mount
- mongoose