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
    fullName: 'Siwar Derbeli',
    email: 's@derbeli.com',
    password: 'password123',
  },
  {
    fullName: 'John Doe',
    email: 'j@g'
  },
];