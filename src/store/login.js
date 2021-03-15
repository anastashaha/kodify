const SET_USER = 'SET_USER';

export const setUser = (username) => {
  return {
    type: SET_USER,
    username,
  };
};

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.username;
    default:
      return state;
  }
}
