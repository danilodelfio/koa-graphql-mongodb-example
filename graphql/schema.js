const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const projectGraphQLType =  require('./projectType');
const Project = require('../models/projects');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    project: {
      type: projectGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
