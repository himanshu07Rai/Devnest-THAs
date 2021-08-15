import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Data from "./features/data/data";

function App() {
  return (
    <div className="container">
      <h3>Fake Store</h3>
      <Data />
    </div>
  );
}

export default App;
