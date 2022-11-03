import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 40%;
  height: 50%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const Button = styled.button`
  background-color: whitesmoke;
  border: none;
  color: black;
  font-size: 1.5rem;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;

  &:active {
    box-shadow: none;
  }
`;

export const CalButton = styled(Button)`
  font-size: 2rem;
  color: white;
  background-color: #4b89dc;
`;

export const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

export const InputBar = styled.input`
  width: 40%;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid skyblue;
  padding-right: 20px;
  text-align: right;

  &:focus {
    outline: none;
  }
`;
