const { GraphQLObjectType, GraphQLString } = require('graphql');
const projectGraphQLType =  require('./projectType');
const Project = require('./../models/projects');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    project: {
        type: projectGraphQLType,
        args: {
            name: { type: GraphQLString },
            last_update: { type: GraphQLString },
            owner: { type: GraphQLString },
            type: { type: GraphQLString }
        },
        resolve(parent, args) {
            const project = new Project();
            project.name = args.name;
            project.last_update = args.last_update;
            project.owner = args.owner;
            project.type = args.type
            return project.save();
        }
    }
  }
})

module.exports = Mutation;