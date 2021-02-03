//stylings for components used in transactions page

import styled from 'styled-components';

export const Container = styled.div`
height: auto;
position: relative;
width: 100%;

`;

export const FilterButton = styled.button`
width:100%;
      padding-bottom: 3px;
      color: black;
      background-color: lightgrey;
      font-size: 17px;
      border:2px solid;

`;

export const ClearButton = styled.button`
width:10%;
    padding-bottom: 3px;
    color: black;
    background-color: lightgrey;
    font-size: 17px;
    border:2px solid;
    &:hover{
        opacity: 0.2;
    }

`;

export const TransactionHeader = styled.h1`
margin-left:50px;

`;

export const FilteringHeader = styled.h1`
margin-top: 130px;

`;


export const Container1 = styled.div`
height: auto;
position: relative;
width: 100%;

`;



export const LeftHalf = styled.div`
{
    background-color: white;
    position: absolute;
    left: 50px;
    width: 60%;
  }

`;

export const LeftHalf1 = styled.div`
{
    background-color: white;
    position: absolute;
    display:flex;
    flex-direction: row;
    margin-bottom: 100px;
    width: 100%;
  }

`;