import React, { useState } from "react";
import { StyledForm, Content, StyledButton } from "../styledComponents";
const Form = ({ AddItem }) => {
  const [item, setItem] = useState("");
  const [calorie, setCalorie] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    AddItem(item, calorie);
    setCalorie("");
    setItem("");
  };
  return (
    <div>
      <StyledForm>
        <Content>
          <input
            type="text"
            placeholder="Item"
            value={item}
            required
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="calorie"
            value={calorie}
            required
            onChange={(e) => {
              setCalorie(e.target.value);
            }}
          />
        </Content>
        <StyledButton onClick={handleSubmit}>Add</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Form;
