const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { addResolveFunctionsToSchema } = require('graphql-tools');
const schema = require('../schema/schema');
const resolvers = require('../schema/resolvers');
require('../config/connectWithDB');

addResolveFunctionsToSchema({ schema, resolvers });

const server = new ApolloServer({ schema, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}ql`));
