import {
  FETCH_DEATH_FAILURE,
  FETCH_DEATH_REQUEST,
  FETCH_DEATH_SUCCESS,
} from "../types";

import axios from "axios";

export const fetchDeaths = () => {
  return async (dispatch) => {
    dispatch(fetchDeathsRequest());
    try {
      const deaths = await axios
        .get("https://breakingbadapi.com/api/deaths")
        .then((res) => res.data);
      dispatch(fetchDeathsSuccess(deaths));
    } catch (err) {
      dispatch(fetchDeathsFailure(err.message));
    }
  };
};

const fetchDeathsRequest = () => {
  return {
    type: FETCH_DEATH_REQUEST,
  };
};

const fetchDeathsSuccess = (deaths) => {
  return {
    type: FETCH_DEATH_SUCCESS,
    payload: deaths,
  };
};

const fetchDeathsFailure = (error) => {
  return {
    type: FETCH_DEATH_FAILURE,
    payload: error,
  };
};
