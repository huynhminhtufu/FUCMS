import UserType from '../types/UserType';

const me = {
  type: UserType,
  args: {
    id: {type: new Graphql.GraphQLNonNull(Graphql.GraphQLID)},
    name: {type: new Graphql.GraphQLNonNull(Graphql.GraphQLString)},
    age: {type: Graphql.GraphQLInt}
    },
};

export default me;
