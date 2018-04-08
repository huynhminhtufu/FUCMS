import { LOGIN_RECEIVE } from '../actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_RECEIVE:
      return {
        ...state,
        ...action.user,
      }
    default:
      return state;
  }
}
