import { gql } from 'apollo-server-express';
const User = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    created_at: String
    updated_at: String
  }
  extend type Query {
    getAllUsers: [User!]
  }
`;

export default User;
