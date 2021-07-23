import React, { useState } from "react";
import { StyledCard, Buttons, Delete, Edit } from "../styledComponents";
const Card = ({ data, deleteCard, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { item, calorie } = data;
  const [i, setI] = useState(item);
  const [c, setC] = useState(calorie);
  const handleSubmit = (e) => {
    e.preventDefault();
    editItem({ i, c });
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <>
        <input
          type="text"
          placeholder="Item"
          value={i}
          required
          onChange={(e) => {
            setI(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="calorie"
          value={c}
          required
          onChange={(e) => {
            setC(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            deleteCard(i);
            setIsEditing(false);
          }}
        >
          Delete
        </button>
      </>
    );
  }
  return (
    <StyledCard>
      <h1>{item}</h1>
      <h3>you have consumed {calorie} calories</h3>
      <Buttons>
        <Delete
          onClick={() => {
            deleteCard(item);
          }}
        >
          Remove
        </Delete>

        <Edit
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </Edit>
      </Buttons>
    </StyledCard>
  );
};

export default Card;
