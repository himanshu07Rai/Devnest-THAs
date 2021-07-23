import React, { useState } from 'react';

const Card = ({ data, deleteCard }) => {
  //   console.log(data);
  const { item, Cals } = data;
  //   console.log(item, Cals);
  // const handleClick =
  return (
    <div
      style={{
        backgroundColor: '#edc',
        border: '1px solid #000',
        borderRadius: '5px',
        margin: '20px',
        padding: '20px'
      }}
      // onClick={deleteCard(data.item)}
    >
      <h1>{item}</h1>
      <h3>you have consumed {Cals} cals today</h3>
      <button
        onClick={() => {
          deleteCard(item);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
