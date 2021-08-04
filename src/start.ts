import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
export default async function start() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  return app.listen(3000, () => {
    console.log('listening on port 3000...');
  });
}
