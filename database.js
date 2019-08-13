const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://127.0.0.1:27017/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('Connesso al db...');
  });

}

module.exports = initDB;