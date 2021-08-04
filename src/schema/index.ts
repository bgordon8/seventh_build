import { gql } from 'apollo-server-express';
import User from './user';

const RootSchema = gql`
  type Query {
    helloWorld: String
  }
`;
export default [RootSchema, User];
