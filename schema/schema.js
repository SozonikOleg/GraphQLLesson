const graphql = require('graphql');
const Query = require('../schema/query/query');
const Mutation = require('../schema/mutation/mutation');

const { GraphQLSchema } = graphql;


module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
