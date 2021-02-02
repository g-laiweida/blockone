import styled from 'styled-components';
export const TableStyle = styled.div`
table {
    margin-top:20px;
  border-spacing: 0;
  border: 1px solid black;
  width: 70%;
  
 

  th,
  td {
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 1;
    }

   
  }
 
  th {
    background: lightgrey;
    border-bottom: 3px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    color: black;
    fontWeight: bold;
    
  }

  
}
`