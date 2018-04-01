import { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';
import UserType from '../types/UserType';
import { signUp } from '../../controllers/userController';

export const me = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      type: GraphQLInt,
    },
  },
};

export const addUser = {
  type: UserType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source, args) => signUp(args),
};

export default { me, addUser };
