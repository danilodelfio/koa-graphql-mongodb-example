const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

const app = new Koa();
app.use(mount('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
})));

app.listen(9000);
initDB();

app.on('error', err => {
  log.error('server error', err)
});