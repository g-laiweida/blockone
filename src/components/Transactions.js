import React, { useState,useEffect} from 'react';


import '../styles/PageStyle.css'
import styled from 'styled-components'
import { TableStyle } from './TableStyle'
import { Dropdown, DropdownContent } from '../styles/Dropdown';


function Transactions() {
 
  const [status, setStatus] = useState("Show Earliest transactions first")
  const [results, setResults] = useState([]);
  const [results1, setResults1] = useState([]);
  const [state, setState] = useState("Filter by: Show all");
 
  const [asc, setAsc] = useState({
    timestamp: true,
    action: true,
    description: true,
    amount: true,
  });

  const onSort = (field) => {
    let ascField = { ...asc };
    let sortedData = results.slice().sort((a, b) => {
      if (a[field] < b[field]) {
        return ascField[field] ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascField[field] ? 1 : -1;
      }
      return 0;
    });

    setResults(sortedData);
 
    ascField[field] = !ascField[field];
    setAsc(ascField);
  };

  useEffect(() => {
    const transactions = async () => {
      const data = await fetch(
        'https://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions'
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });
      data.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
      setResults(data);
      setResults1(data);
      
    };
    transactions();
  }, []);

  const renderedResults = results.map((result) => {
    return (
      <tr className='transactionItem' key={result.id}>
        <td>{result.timestamp}</td>
        <td>{result.action}</td>
        <td>{result.description}</td>
        {result.action === 'DEBIT' ? (
          <td
            style={{
              color: '#d9534f',
            }}
          >
            -{result.amount}
          </td>
        ) : (
          <td
            style={{
              color: 'green',
            }}
          >
            +{result.amount} 
          </td>
        )}
        <td>{result.currency}</td>
      </tr>
    );
  });

 var now = new Date().getMonth();
 var thisyear = new Date().getYear();
 
 const duration = [
    
    {  label: 'Filter by: Current Month' },
    {  label: 'Filter by: Past 3 Months' },
    {  label: 'Filter by: Past 6 Months' },
    {  label: 'Filter by: Debit Only' },
    {  label: 'Filter by: Credit Only' },
    {  label: 'Filter by: HKD Only' },
    {  label: 'Filter by: SGD Only' },
    {  label: 'Filter by: USD Only' },
    {  label: 'Filter by: Show all' },
    
 
  ];
 
  return(
    <>
    
    <h1 className="title">My Transactions</h1>
    <div className="container1">
    <div className="left-half">
    <TableStyle>
    
    <table>
                <thead>
                  <tr>
                    <th onClick={() => onSort('timestamp')}>
                      Timestamp &#9650;
                    </th>
                    <th onClick={() => onSort('action')}>
                      Action &#9650;    
                    </th>
                    <th onClick={() => onSort('description')}>
                      Description &#9650;
                    </th>
                    <th onClick={() => onSort('amount')}>
                      Amount &#9650;
                    </th>
                    <th onClick={() => onSort('currency')}>
                      Currency &#9650;
                    </th>
                  </tr>
                </thead>
                <tbody>{renderedResults}</tbody>
              </table>
              </TableStyle>
              </div>
      
        
        
    <div className="right-half"><h3>{state}</h3>
        <Dropdown>
        <button className='filterbtn'>Select Filter</button>
        <DropdownContent>
            <span id='currentMonth'  onClick={()=>{setState(duration[0].label);setResults(results1);setResults(results1.filter(result => new Date(result.timestamp).getMonth()-now===0))}}>
             Current Month
            </span>
        
            <span id='pastThreeMonth'  onClick={()=>{setState(duration[1].label);setResults(results1);setResults(results1.filter(result => new Date(result.timestamp).getYear()<thisyear ? new Date(result.timestamp).getMonth()-now>8 : now - new Date(result.timestamp.getMonth())<3))}}>
            Past 3 Month
            </span>
            <span id='pastSixMonth'  onClick={()=>{setState(duration[2].label);setResults(results1);setResults(results1.filter(result => new Date(result.timestamp).getYear()<thisyear ? new Date(result.timestamp).getMonth()-now>6 : now - new Date(result.timestamp.getMonth())<6))}}>
            Past 6 Month
            </span>
            <span id='debit'  onClick={()=>{setState(duration[3].label);setResults(results1);setResults(results1.filter(result => result.action==="DEBIT"))}}>
            Debit only
            </span>
            <span id='credit'  onClick={()=>{setState(duration[4].label);setResults(results1);setResults(results1.filter(result => result.action==="CREDIT"))}}>
            Credit only
            </span>
            <span id='hkd'  onClick={()=>{setState(duration[5].label);setResults(results1);setResults(results1.filter(result => result.currency==="HKD"))}}>
            HKD
            </span>
            <span id='sgd'  onClick={()=>{setState(duration[6].label);setResults(results1);setResults(results1.filter(result => result.currency==="SGD"))}}>
            SGD 
            </span>
            <span id='usd'  onClick={()=>{setState(duration[7].label);setResults(results1);setResults(results1.filter(result => result.currency==="USD"))}}>
            USD
            </span><span id='clear'  onClick={()=>{setState(duration[8].label);setResults(results1)}}>
            Clear Filter
            </span>
      
      </DropdownContent>
        </Dropdown>
    </div>
    </div>

         </>     
              
  )
  
  
  
  
  
  
  


}

export default Transactions;