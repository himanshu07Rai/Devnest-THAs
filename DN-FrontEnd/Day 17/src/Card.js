const Card = ({ data }) => {
  //   console.log(data);
  const { item, Cals } = data;
  //   console.log(item, Cals);
  return (
    <div
      style={{
        backgroundColor: "#edc",
        border: "1px solid #000",
        borderRadius: "5px",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h1>{item}</h1>
      <h3>you have consumed {Cals} cals today</h3>
    </div>
  );
};

export default Card;
