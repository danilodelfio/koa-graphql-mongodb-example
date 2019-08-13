const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const ProjectSchema = new Schema({
  name: String,
  last_update: Date,
  owner: String,
  type: String,
});

module.exports = mongoose.model('Project', ProjectSchema);