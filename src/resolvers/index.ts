import Database from '../db';
const db = new Database();
export default {
  Query: {
    helloWorld: () => "Hello world, it's me again",
    getAllUsers: () => {
      return db.getAllUsers();
    },
  },
};
