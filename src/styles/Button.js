import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  background-color: #2dbe60;
  color: white;
  font-size: 16px;
  border: 1px solid #2dbe60;
  border-radius: 5px;
  width: 100%;

  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    filter: brightness(1.1);
  }

  &:focus {
    outline: none;
    border: 1px solid #2dbe60;
  }
`;
