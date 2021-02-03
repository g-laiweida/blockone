import React, { useState, useEffect } from 'react';
import '../styles/PageStyle.css'
import styled from 'styled-components'
import { TableStyle } from './TableStyle'
import { Dropdown, DropdownContent } from '../styles/Dropdown';
import { FilteringHeader, Container1, FilterButton, LeftHalf, LeftHalf1, TransactionHeader,ClearButton } from '../styles/TransactionPage';


function Transactions() {

  //arrays to store data from api
  const [results, setResults] = useState([]);
  const [results1, setResults1] = useState([]);

  //arrays to store icons
  const [icon, setIcon] = useState({
    timestamp: String.fromCharCode('9661'),
    action: String.fromCharCode('9661'),
    description: String.fromCharCode('9661'),
    amount: String.fromCharCode('9661'),
    currency: String.fromCharCode('9661'),
  });
  const [icon1, setIcon1] = useState({
    timestamp: String.fromCharCode('9661'),
    action: String.fromCharCode('9661'),
    description: String.fromCharCode('9661'),
    amount: String.fromCharCode('9661'),
    currency: String.fromCharCode('9661'),
  });

  //arrays to store filter states
  const [state, setState] = useState("Show all");
  const [action, setAction] = useState("");
  const [currency, setCurrency] = useState("");

  //sorts the selected column by both ways i.e. increasing or decreasing
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
    let temp = { ...icon1 };

    temp[field] = String.fromCharCode('9660');
    setIcon(temp);

  };


  //fetch data from api
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


  //maps api to corresponding table columns
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

  //variables to store today's month/year
  var now = new Date().getMonth();
  var thisyear = new Date().getYear();

  //array to store filter options
  const duration = [

    { label: 'Current Month' },
    { label: 'Past 3 Months' },
    { label: 'Past 6 Months' },
    { label: 'Debit Only' },
    { label: 'Credit Only' },
    { label: 'HKD Only' },
    { label: 'SGD Only' },
    { label: 'USD Only' },
    { label: 'Show all' },


  ];


  //returns page with table and filter buttons
  return (
    <>

      <TransactionHeader> My Transactions </TransactionHeader>

      <Container1>

        <LeftHalf>
          <h3>Select Filter</h3>
          <LeftHalf1>

            <Dropdown>
              <FilterButton>Timeframe</FilterButton>
              <DropdownContent>
                <span id='currentMonth' onClick={() => { setAction(''); setCurrency(''); setState(duration[0].label); setResults(results1.filter(result => new Date(result.timestamp).getMonth() - now === 0)) }}>
                  Current Month
            </span>

                <span id='pastThreeMonth' onClick={() => { setAction(''); setCurrency(''); setState(duration[1].label); setResults(results1.filter(result => new Date(result.timestamp).getYear() < thisyear ? new Date(result.timestamp).getMonth() - now > 8 : now - new Date(result.timestamp.getMonth()) < 3)) }}>
                  Past 3 Month
            </span>
                <span id='pastSixMonth' onClick={() => { setAction(''); setCurrency(''); setState(duration[2].label); setResults(results1.filter(result => new Date(result.timestamp).getYear() < thisyear ? new Date(result.timestamp).getMonth() - now > 6 : now - new Date(result.timestamp.getMonth()) < 6)) }}>
                  Past 6 Month
            </span>
              </DropdownContent>
            </Dropdown>


            <Dropdown>
              <FilterButton>Credit/Debit</FilterButton>
              <DropdownContent>
                <span id='debit' onClick={() => { setState(''); setCurrency(''); setAction(duration[3].label); setResults(results1.filter(result => result.action === "DEBIT")) }}>
                  Debit only
            </span>
                <span id='credit' onClick={() => { setState(''); setCurrency(''); setAction(duration[4].label); setResults(results1.filter(result => result.action === "CREDIT")) }}>
                  Credit only
            </span>
              </DropdownContent>
            </Dropdown>

            <Dropdown>
              <FilterButton>Currency</FilterButton>
              <DropdownContent>
                <span id='hkd' onClick={() => { setAction(''); setState(''); setCurrency(duration[5].label); setResults(results1.filter(result => result.currency === "HKD")) }}>
                  HKD
            </span>
                <span id='sgd' onClick={() => { setAction(''); setState(''); setCurrency(duration[6].label); setResults(results1.filter(result => result.currency === "SGD")) }}>
                  SGD
            </span>
                <span id='usd' onClick={() => { setAction(''); setState(''); setCurrency(duration[7].label); setResults(results1.filter(result => result.currency === "USD")) }}>
                  USD
            </span>
              </DropdownContent>
            </Dropdown>

            <ClearButton onClick={() => { setAction(''); setCurrency(''); setState(duration[8].label); setResults(results1) }}>Clear Filter </ClearButton>
          </LeftHalf1>


          <FilteringHeader>Currently filtering by: {state} {action} {currency} </FilteringHeader>
          <TableStyle>

            <table>
              <thead>
                <tr>
                  <th onClick={() => onSort('timestamp')}>
                    Timestamp {icon.timestamp}
                  </th>
                  <th onClick={() => onSort('action')}>
                    Action {icon.action}
                  </th>
                  <th onClick={() => onSort('description')}>
                    Description {icon.description}
                  </th>
                  <th onClick={() => onSort('amount')}>
                    Amount {icon.amount}
                  </th>
                  <th onClick={() => onSort('currency')}>
                    Currency {icon.currency}
                  </th>
                </tr>
              </thead>
              <tbody>{renderedResults}</tbody>
            </table>
          </TableStyle>
        </LeftHalf>
      </Container1>

    </>

  )









}

export default Transactions;