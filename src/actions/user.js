import { error } from 'react-notification-system-redux';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginReceive = (user) => ({
  type: LOGIN_RECEIVE,
  user,
});

export const login = (data) => {
  return async (dispatch, getState, helper) => {
    dispatch(loginRequest());

    const result = await helper.fetch('/api/login', {
      body: JSON.stringify(data),
    });

    if (result.redirected || result.status !== 200) {
      dispatch(
        error({
          title: 'Error!',
          message: `Something went wrong!`,
          position: 'tc',
          autoDismiss: 2,
        })
      );

      return {};
    }

    const user = await result.json();

    dispatch(loginReceive(user || {}));

    return user;
  };
};