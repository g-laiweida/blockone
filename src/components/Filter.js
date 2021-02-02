import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownContent } from '../styles/Dropdown';
import { Button } from '../styles/Button';

export default function Filter(results) {
  const [filter, setFilter] = useState('');
  const [resultsClone] = useState(results.results);

  const filterResults = (e) => {
    setFilter(e.target.id);
  };

  useEffect(() => {
    if (filter === 'currentMonth') {
      var year = new Date().getFullYear();
      var month = new Date().getMonth();
      var currentMonth = new Date(year, month, 1);
      const filtered = resultsClone.filter((result) => {
        return new Date(result.timestamp) - currentMonth > 0;
      });
      results.setResults(filtered);
      console.log(results);
    } else if (filter === 'lastMonth') {
      var lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      const filtered = resultsClone.filter((result) => {
        return new Date(result.timestamp) - lastMonth > 0;
      });
      results.setResults(filtered);
    } else if (filter === 'sixMonths') {
      var sixMonths = new Date();
      sixMonths.setMonth(sixMonths.getMonth() - 6);
      const filtered = resultsClone.filter((result) => {
        return new Date(result.timestamp) - sixMonths > 0;
      });
      results.setResults(filtered);
    } else {
      results.setResults(resultsClone);
    }
  }, [filter]);

  return (
    <Dropdown>
      <Button>Filter</Button>
      <DropdownContent>
        <span id='currentMonth' onClick={(e) => filterResults(e)}>
          Current Month
        </span>
        <span id='lastMonth' onClick={(e) => filterResults(e)}>
          Last Month
        </span>
        <span id='sixMonths' onClick={(e) => filterResults(e)}>
          Past 6 Months
        </span>
       
        <span
          id='clear'
          onClick={(e) => filterResults(e)}
          style={{ color: '#d9534f' }}
        >
          Clear Filter
        </span>
      </DropdownContent>
    </Dropdown>
  );
}
