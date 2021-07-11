import Block from "./Block";

const row = [1, 0, 1, 0, 1, 0, 1, 0];
const row2 = [0, 1, 0, 1, 0, 1, 0, 1];

function App() {
  return (
    <div style={container}>
      <div style={wrapper}>
        {row.map((c) => (
          <Block c={c} />
        ))}
        {row2.map((c) => (
          <Block c={c} />
        ))}
        {row.map((c) => (
          <Block c={c} />
        ))}
        {row2.map((c) => (
          <Block c={c} />
        ))}
        {row.map((c) => (
          <Block c={c} />
        ))}
        {row2.map((c) => (
          <Block c={c} />
        ))}
        {row.map((c) => (
          <Block c={c} />
        ))}
        {row2.map((c) => (
          <Block c={c} />
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
  width: "600px",
  height: "600px",
  display: "grid",
  gridTemplateColumns: "repeat(8,1fr)",
  gridTemplateRows: "repeat(8,1fr)",
  // padding: "10px",
  // overflow: "auto",
  boxShadow: "2px 3px 9px -1px #000",
};

export default App;
