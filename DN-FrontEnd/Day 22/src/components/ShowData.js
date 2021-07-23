import Card from './Card';
import React, { useState } from 'react';
import styled from 'styled-components';

const DataContainer = styled.div``;
const ShowData = ({ data, deleteCard }) => {
  if (!data.length) {
    return <div>Add items</div>;
  } else
    return (
      <div>
        {data.map((d, index) => (
          <Card key={index} data={d} deleteCard={deleteCard} />
        ))}
      </div>
    );
};

export default ShowData;
