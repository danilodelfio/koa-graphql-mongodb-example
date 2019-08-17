const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  last_update: String,
  owner: String,
  type: String,
});

module.exports = mongoose.model('Project', ProjectSchema);