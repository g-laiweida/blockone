import styled from 'styled-components';

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 50%;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-align: center;
  border: 1px solid black;

  span {
    color: black;
    padding: 5px 5px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: lightgray;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  background-color: #2dbe60;
  color: white;
  padding: 0 20px;
  font-size: 16px;
  border: 1px solid #2dbe60;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
