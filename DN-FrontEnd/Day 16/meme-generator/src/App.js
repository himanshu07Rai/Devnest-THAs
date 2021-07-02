import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Spinner } from "./components/Spinner";

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;

const Fetch = styled.button`
  display: block;
  box-shadow: none;
  border: none;
  width: 30%;
  display: block;
  margin: auto;
  cursor: pointer;
  background-color: #09f;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  height: 350px;
  width: 300px;
  h1 {
    font-size: 20px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

function App() {
  const [data, setdata] = useState([]);
  const getMeme = async () => {
    let res = await axios.get("https://meme-api.herokuapp.com/gimme");
    res = res.data;
    setdata([...data, res]);
  };

  useEffect(() => {
    getMeme();
  }, []);

  return !data.length ? (
    <Cont>
      <Spinner />
    </Cont>
  ) : (
    <Container>
      <Grid>
        {data.map((meme, index) => (
          <Card key={index}>
            <h1>{meme.author}</h1>
            <img src={meme.url} />
          </Card>
        ))}
      </Grid>
      <Fetch onClick={getMeme}>Fetch Another</Fetch>
    </Container>
  );
}

export default App;
