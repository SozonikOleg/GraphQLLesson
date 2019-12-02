const graphql = require('graphql');
const { MovieType, DirectorType } = require('../../types/types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
    },
    movies: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
    },
    directors: {
      type: DirectorType,
      args: { id: { type: GraphQLString } },
    },
  }),
});
