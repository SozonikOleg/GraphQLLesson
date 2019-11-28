const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('../schema/schema');
require('../config/connectWithDB');
const { Movies, Director } = require('../mongoDB/userSchema');

const server = new ApolloServer({ schema });
const app = express();
server.applyMiddleware({ app });

// Movies.create(movies.map((movie) => movie));

// Director.create(directors.map((director) => director));

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}ql`));
