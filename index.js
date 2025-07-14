const graphqlServer = require('./configs/graphql.js');
const {connectDB} = require('./configs/db.js');

connectDB();

graphqlServer();
