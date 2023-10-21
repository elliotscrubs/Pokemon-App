import React, { useState } from 'react';
import CardsView from './CardsView';
import Search from './Search';
import './App.css';

const App = () => {
  return (
    <>
      <Search />
      <CardsView />
    </>
  );
};

export default App;
