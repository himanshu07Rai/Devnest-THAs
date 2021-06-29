import {
  FETCH_QUOTE_FAILURE,
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  quotes: [],
  error: "",
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        loading: false,
        quotes: action.payload,
        error: "",
      };
    case FETCH_QUOTE_FAILURE:
      return {
        loading: false,
        quotes: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
