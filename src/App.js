import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import CardsView from './CardsView';
import './Card.css';

const App = () => {
  return (
    <>
      <div className='search'>
        <h1>Pokemon Search</h1>
        <div className='search'>
          <TextField
            id='outlined-basic'
            variant='outlined'
            width='50%'
            label='Pokemon name'
          />
        </div>
      </div>
      <CardsView />
    </>
  );
};

export default App;
