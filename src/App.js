import React, { useState } from 'react';
import CardsView from './CardsView';
import Search from './Search';
import DetailView from './DetailView';
import './App.css';

const App = () => {
  const [searchedName, setSearchedName] = useState(null);

  return (
    <>      
      <Search handleSearchChange={value => setSearchedName(value)} />
      {searchedName ? <DetailView name={searchedName} /> : <CardsView />} 
    </>
  );
};

export default App;
