import React from 'react';
import { Alert } from '../styles/Alert';
import { useHistory } from 'react-router-dom';

export default function AlertModal({ alertProps, setAlert }) {
  const { color, message } = alertProps;
  const history = useHistory();
  return (
    <Alert color={color} onClick={() => setAlert(false)}>
      {color === '#6ef58e' ? (
        <span onClick={() => history.push('/trade')}>&#9746;</span>
      ) : (
        ''
      )}
      {message}
    </Alert>
  );
}
