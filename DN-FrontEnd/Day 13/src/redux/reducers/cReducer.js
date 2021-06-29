import {
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  characters: [],
  error: "",
};

const cReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        loading: false,
        characters: action.payload,
        error: "",
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        loading: false,
        characters: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cReducer;
