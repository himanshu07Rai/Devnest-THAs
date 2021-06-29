import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions/cActions";
import Spinner from "./Spinner";
import "../../src/";

function Characters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  const character = useSelector((state) => state.character);
  return character.loading ? (
    <Spinner />
  ) : character.error ? (
    <h2>{character.error}</h2>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Characters</h1>
      <div>
        {character.characters.map((character) => (
          <p>
            {character.char_id} {character.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Characters;
