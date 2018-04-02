/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLSchema as Schema } from 'graphql';

import query from './queries';
import mutation from './mutations';

const schema = new Schema({
  query,
  mutation,
});

export default schema;
