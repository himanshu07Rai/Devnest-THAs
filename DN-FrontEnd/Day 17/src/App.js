import Card from "./Card";
import data from "./data";

function App() {
  return (
    <div style={container}>
      <div style={wrapper}>
        {data.map((d, index) => (
          <Card key={index} data={d} />
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
