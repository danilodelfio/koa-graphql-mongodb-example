const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    last_update: { type: GraphQLString },
    owner: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

module.exports = ProjectType;