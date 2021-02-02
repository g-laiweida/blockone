import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  margin: 30px;
  background-color: white;
  border: 2px solid black;
  box-sizing: border-box;
  
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 0px 0px 20px;
  padding: 20px;
  color: #4c4d4d;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #2dbe60;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #4c4d4d;
  display: block;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles};
`;

export const Select = styled.select`
  width: 100%;
  display: block;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 0px 0px 20px;
  color: grey;
  padding-left: 20px;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border: 1px solid #2dbe60;
  }
`;

export const TextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 80px;
  resize: none;
  margin: 20px 0;
  ${sharedStyles};
`;

export const FieldSet = styled.fieldset`
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  color: #4c4d4d;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;
