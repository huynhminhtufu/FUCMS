import { GraphQLObjectType } from 'graphql';
import userFields from './user';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation of the users',
  fields: {
    ...userFields,
  },
});

export default mutation;
