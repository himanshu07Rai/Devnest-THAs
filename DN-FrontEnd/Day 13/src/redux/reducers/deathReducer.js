import {
  FETCH_DEATH_FAILURE,
  FETCH_DEATH_REQUEST,
  FETCH_DEATH_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  deaths: [],
  error: "",
};

const deathReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEATH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEATH_SUCCESS:
      return {
        loading: false,
        deaths: action.payload,
        error: "",
      };
    case FETCH_DEATH_FAILURE:
      return {
        loading: false,
        deaths: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deathReducer;
