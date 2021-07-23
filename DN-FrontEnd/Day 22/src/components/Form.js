import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 30px;
  border: 2px solid red;
`;

const StyledForm = styled.form`
  display: flex;
  > input {
    padding: 10px;
    margin: 5px;
  }
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 20px;
  background-color: #00f;
`;

const Form = ({ AddItem }) => {
  const [item, setItem] = useState('');
  const [calorie, setCalorie] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    AddItem(item, calorie);
  };
  return (
    <FormContainer>
      <StyledForm>
        <input
          type="text"
          placeholder="Item"
          value={item}
          required
          onChange={e => {
            setItem(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="calorie"
          value={calorie}
          required
          onChange={e => {
            setCalorie(e.target.value);
          }}
        />
        <StyledButton onClick={handleSubmit}>Add</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
