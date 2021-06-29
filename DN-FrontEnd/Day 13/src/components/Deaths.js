import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeaths } from "../redux/actions/deathActions";
import Spinner from "./Spinner";

function Deaths() {
  const dispatch = useDispatch(fetchDeaths());

  useEffect(() => {
    dispatch(fetchDeaths());
  }, [dispatch]);
  const death = useSelector((state) => state.death);

  return death.loading ? (
    <Spinner />
  ) : death.error ? (
    <h2>{death.error}</h2>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Deaths</h1>
      <div>
        {death.deaths.map((death) => (
          <p>
            {death.death} -- {death.cause}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Deaths;
