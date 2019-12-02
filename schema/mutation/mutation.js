const graphql = require('graphql');
// const { Movies, Director } = require('../../mongoDB/userSchema');
const { MovieType, DirectorType } = require('../../types/types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDirector: {
      type: DirectorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: GraphQLID },
      },
    },
    deleteDirector: {
      type: DirectorType,
      args: { id: { type: GraphQLString } },
    },
    deleteMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: GraphQLString },
      },
    },
  },
});
