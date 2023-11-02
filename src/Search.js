import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';

import './Search.css';

function Search(props) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPokemonList(json.results);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='searchContainer'>
      <h1>Pokemon Search</h1>
      <div className='search'>
        <Autocomplete
          options={pokemonList}
          getOptionLabel={option =>
            option.name.charAt(0).toUpperCase() + option.name.slice(1)
          }
          onChange={(event, value) => {
            props.handleSearchChange(value?.url ? value.url : null );
          }}
          renderInput={params => (
            <TextField
              {...params}
              id='outlined-basic'
              variant='outlined'
              label='Pokemon name'
            />
          )}
        />
      </div>
    </div>
  );
}

export default Search;
