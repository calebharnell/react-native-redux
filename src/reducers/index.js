import { combineReducers } from 'redux';

import { ADD_EMAIL } from "../actions/" //Import the actions types constant we defined in our actions

let initialState = {
  email: ''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      state = Object.assign({}, state, {
        email: action.email
      });
      console.log(state)
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  AuthReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;