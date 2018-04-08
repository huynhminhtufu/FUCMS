import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import user from './user';
import runtime from './runtime';

export default combineReducers({
  notifications,
  user,
  runtime,
});
