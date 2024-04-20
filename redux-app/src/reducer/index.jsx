/** @format */

// reducers/index.jsx

import { combineReducers } from "redux";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    case "REMOVE_DATA":
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
