import { combineReducers } from "redux";
import { SELECT_USER, SELECT_YEAR } from "../../actions/User/select";

const INITIAL_STATE = {
  selected: {},
  year: "21",
};

const selected = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_USER:
      return { ...state, selected: action.payload };
    case SELECT_YEAR:
      return { ...state, year: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  selected,
});
