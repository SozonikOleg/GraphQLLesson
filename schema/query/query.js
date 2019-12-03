const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { MovieType, DirectorType } = require('../../types/types');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    movie: {
      type: MovieType,
      args: { _id: { type: GraphQLString } },
    },
    director: {
      type: DirectorType,
      args: { _id: { type: GraphQLString } },
    },
    movies: {
      type: new GraphQLList(MovieType),
    },
    directors: {
      type: new GraphQLList(DirectorType),
    },
  }),
});
