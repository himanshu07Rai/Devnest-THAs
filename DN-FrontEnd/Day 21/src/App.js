import React, { useState } from "react";
import Form from "./components/Form";
import ShowData from "./components/ShowData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styledComponents";

function App() {
  const notify = () => toast("Fill all fields!!");
  const [data, setData] = useState([]);
  const deleteCard = (p) => {
    console.log(p);
    let res = data.filter((d) => {
      return d.item !== p;
    });
    setData(res);
    console.log(data);
  };

  const AddItem = (item, calorie) => {
    if (item == "" || calorie == "") {
      console.log("s");
      notify();
      return;
    }
    console.log("add");
    setData([...data, { item, calorie }]);
    console.log(data);
  };

  const editItem = (p) => {
    console.log(p);
    // setData([...data, { item, calorie }]);
    let res = data.filter((d) => {
      return d.item === p.i;
    });
    console.log(res);
    res[0].calorie = p.c;
    console.log(data);
  };

  return (
    <Container>
      <Form AddItem={AddItem} />
      <ShowData data={data} deleteCard={deleteCard} editItem={editItem} />
      <ToastContainer />
    </Container>
  );
}

export default App;
