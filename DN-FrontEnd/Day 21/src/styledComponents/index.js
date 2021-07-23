import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const StyledCard = styled.div`
  border: 2px solid #39f;
  padding: 20px;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  padding: 10px;
  button {
    margin: 10px;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: #fff;
    font-size: 20x;
    border-radius: 4px;
  }
`;

const Delete = styled.button`
  background-color: #fd6e0d;
`;

const Edit = styled.button`
  background-color: #0d6efd;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    margin: 5px;
    width: 300px;
  }
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #39f;
  border: none;
  font-size: 16px;
  border-radius: 5px;
`;

export {
  StyledButton,
  Container,
  Content,
  StyledForm,
  StyledCard,
  Buttons,
  Delete,
  Edit,
};
