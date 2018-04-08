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

    const user = await result.json();

    dispatch(loginReceive(user || {}));

    return user;
  };
};