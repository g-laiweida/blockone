import React, { useState, useRef } from 'react';
import { Form, Label, Input, TextArea, Select } from '../styles/Form';
import { Button } from '../styles/Button';
import { Title } from '../styles/Title';
import AlertModal from '../components/AlertModal';
import '../styles/PageStyle.css'

export default function Trade() {
  const formRef = useRef();
  const [registerForm, setRegisterForm] = useState({
    date: `${new Date().toISOString().split('T')[0]}`,
    action: 'CREDIT',
    currency: '',
    description: '',
    amount: '',
  });
  const [active, setActive] = useState(0);
  const [alert, setAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({
    color: '',
    message: '',
  });


  const handleFieldChange = (field, event) => {
    let previousForm = { ...registerForm };
    previousForm[field] = event.target.value;
    setRegisterForm(previousForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      'https://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions',
      {
        method: 'POST',
        body: JSON.stringify({
          timestamp: registerForm.date,
          action: registerForm.action,
          description: registerForm.description,
          amount: registerForm.amount,
          currency: registerForm.currency,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));
    event.target.reset();
    formRef.current.value = '';
    setActive(0);
    console.log(res);
    window.scrollTo(0, 0);
    if (res == null) {
      setAlertProps((prevState) => {
        return {
          ...prevState,
          color: 'red',
          message: 'Transaction failed',
        };
      });
    } else {
      setAlertProps((prevState) => {
        return {
          ...prevState,
          color: '#6ef58e',
          message: 'Transaction was successful',
        };
      });
    }
    setAlert(true);
  };

  return (
    <>
      {alert ? <AlertModal alertProps={alertProps} setAlert={setAlert} /> : ''}
      <div className="container">
          <Form id='transactionForm' onSubmit={(e) => handleSubmit(e)}>
            <Title>Make a new transaction</Title>
      
             <Label>Select credit/debit</Label>
            <Select
              defaultValue={registerForm.action}
              onChange={(e) => handleFieldChange('action', e)}
              ref={formRef}
              required
            >
              <option value='' disabled style={{ color: 'grey' }}>
                Select credit/debit
              </option>
              <option value='CREDIT'>CREDIT</option>
              <option value='DEBIT'>DEBIT</option>
              
            </Select>
          
 
            <Label>Date</Label>
            <Input
              type='date'
              id='date'
              min={new Date().toISOString().split('T')[0]}
              defaultValue={new Date().toISOString().split('T')[0]}
              onChange={(e) => handleFieldChange('date', e)}
              required
            />
            <Label>Currency</Label>
            <Select
              defaultValue={registerForm.currency}
              onChange={(e) => handleFieldChange('currency', e)}
              ref={formRef}
              required
            >
              <option value='' disabled style={{ color: 'grey' }}>
                Currency
              </option>
              <option value='HKD'>HKD</option>
              <option value='SGD'>SGD</option>
              <option value='USD'>USD</option>
            </Select>
            <Label>Amount</Label>
            <Input
              type='number'
              className='amount'
              id='amount'
              placeholder='$'
              min='0.00'
              step='0.01'
              onChange={(e) => handleFieldChange('amount', e)}
              required
            />
            <Label>Description</Label>
            <TextArea
              type='text'
              onChange={(e) => handleFieldChange('description', e)}
              required
            />
            
            <Button type='submit' className='submit-button' value='Submit'>
              Submit
            </Button>
          </Form>
          </div>
    </>
  );
}
