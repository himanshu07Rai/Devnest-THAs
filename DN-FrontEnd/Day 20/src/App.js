import Card from "./Card";
import Data from "./data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(Data);
  const deleteCard = (p) => {
    console.log("e");
    let res = data.filter((d) => {
      return d.item !== p;
    });
    setData(res);
    console.log(data);
  };

  if (!data.length) {
    return (
      <div style={container}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#ee3",
            width: "400px",
            height: "400px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "2px 3px 9px -1px #000",
          }}
        >
          Empty!
        </div>
      </div>
    );
  } else
    return (
      <div style={container}>
        <div style={wrapper}>
          {data.map((d, index) => (
            <Card key={index} data={d} deleteCard={deleteCard} />
          ))}
        </div>
      </div>
    );
}

const container = {
  display: "flex",
  backgroundColor: "#ee3",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const wrapper = {
  width: "500px",
  height: "400px",
  padding: "10px",
  overflow: "auto",
  boxShadow: "2px 3px 9px -1px #000",
};

export default App;
