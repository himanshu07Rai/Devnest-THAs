import {
  FETCH_QUOTE_FAILURE,
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
} from "../types";

import axios from "axios";

export const fetchQuotes = () => {
  return async (dispatch) => {
    dispatch(fetchQuotesRequest());
    try {
      const quotes = await axios
        .get("https://breakingbadapi.com/api/quotes")
        .then((res) => res.data);
      dispatch(fetchQuotesSuccess(quotes));
    } catch (err) {
      dispatch(fetchQuotesFailure(err.message));
    }
  };
};

const fetchQuotesRequest = () => {
  return {
    type: FETCH_QUOTE_REQUEST,
  };
};

const fetchQuotesSuccess = (quotes) => {
  return {
    type: FETCH_QUOTE_SUCCESS,
    payload: quotes,
  };
};

const fetchQuotesFailure = (error) => {
  return {
    type: FETCH_QUOTE_FAILURE,
    payload: error,
  };
};
