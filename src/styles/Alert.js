import styled from 'styled-components';

export const Alert = styled.div`
  padding: 10px;
  background-color: ${(props) => props.color};
  color: black;
  font-size: 20px;

  span {
    margin-left: 15px;
    color: black;
    float: right;
    font-size: 25px;
    line-height: 23px;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
