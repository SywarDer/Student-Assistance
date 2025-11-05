import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against your data.
const typeDefs = `#graphql
type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 

  type Query {
    users: [User!]!
  }
`;

const users = [
  {
    id: '1',
    fullName: 'Siwar Derbeli',
    email: 's@derbeli.com',
    password: 'password123',
  },
  {
    id: '2',
    fullName: 'John Doe',
    email: 'j@gmail.com',
    password: 'password456'
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves users from the "users" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`Server ready at: ${url}`);