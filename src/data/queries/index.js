import { GraphQLObjectType as ObjectType } from 'graphql';

import me from './me';
import news from './news';

const query = new ObjectType({
  name: 'Query',
  fields: {
    me,
    news,
  },
});

export default query;
