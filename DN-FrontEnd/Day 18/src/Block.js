const Block = ({ c }) => {
  const color = c === 0 ? "#000" : "#fff";
  return (
    <div
      style={{
        background: color,
      }}
    ></div>
  );
};

export default Block;
