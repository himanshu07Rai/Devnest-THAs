import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../redux/actions/quoteActions";
import Spinner from "./Spinner";

function QuotesContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);
  const quote = useSelector((state) => state.quote);
  return quote.loading ? (
    <Spinner />
  ) : quote.error ? (
    <h2>{quote.error}</h2>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Quotes</h2>
      <div>
        {quote.quotes.map((quote) => (
          <p>
            {quote.quote} -- {quote.author}
          </p>
        ))}
      </div>
    </div>
  );
}

export default QuotesContainer;
