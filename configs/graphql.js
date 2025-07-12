require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone') ;
const typeDefs = require('../typeDefs/index');
const resolvers = require('../resolvers/resolvers');

const graphqlServer = async() => {
    const server = new ApolloServer({
     typeDefs,
     resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4100 },
});

console.log(`🚀  Server ready at: ${url}`);
}


module.exports = graphqlServer;