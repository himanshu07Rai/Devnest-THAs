import Card from "./Card";
import React, { useState } from "react";

const ShowData = ({ data, deleteCard, editItem }) => {
  if (!data.length) {
    return <div>Add items</div>;
  } else
    return (
      <div>
        {data.map((d, index) => (
          <Card
            key={index}
            data={d}
            deleteCard={deleteCard}
            editItem={editItem}
          />
        ))}
      </div>
    );
};

export default ShowData;
