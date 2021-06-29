import {
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
} from "../types";

import axios from "axios";

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch(fetchCharactersRequest());
    try {
      const characters = await axios
        .get("https://breakingbadapi.com/api/characters")
        .then((res) => res.data);
      dispatch(fetchCharactersSuccess(characters));
    } catch (err) {
      dispatch(fetchCharactersFailure(err.message));
    }
  };
};

const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};
