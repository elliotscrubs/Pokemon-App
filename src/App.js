import React, { useState } from 'react';
import CardsView from './CardsView';
import Search from './Search';
import DetailView from './DetailView';
import './App.css';

const App = () => {
  const [searchedPokemonsUrl, setSearchedPokemonsUrl] = useState(null);

  return (
    <>      
      <Search handleSearchChange={value => setSearchedPokemonsUrl(value)} />
      {searchedPokemonsUrl ? <DetailView pokemonsUrl={searchedPokemonsUrl} /> : <CardsView />} 
    </>
  );
};

export default App;
