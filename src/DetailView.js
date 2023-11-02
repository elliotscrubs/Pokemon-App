import { useState, useEffect } from 'react';
import './DetailView.css';

function DetailView(props) {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePokemon = await fetch(props.pokemonsUrl);
        const jsonPokemon = await responsePokemon.json();

        const responseSpecies = await fetch(jsonPokemon.species.url);
        const jsonSpecies = await responseSpecies.json();

        setPokemonData({
          image: jsonPokemon.sprites.other['official-artwork'].front_default,
          id: jsonPokemon.id,
          name: jsonPokemon.name,
          types: jsonPokemon.types.map(typeEntry => typeEntry.type.name),
          abilities: jsonPokemon.abilities.map(
            moveEntry => moveEntry.ability.name
          ),
          height: jsonPokemon.height,
          weight: jsonPokemon.weight,
          habitat: jsonSpecies.habitat.name,
          flavorText: jsonSpecies.flavor_text_entries
            .filter(flavor_text => flavor_text.language.name === 'en' ? flavor_text : '')
              .map(text => text.flavor_text.replace(/\u000c/g,
              ' '))
        })
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [props.pokemonsUrl]);

  return (
    <>
      <button
        className='backButton'
        onClick={() => props.handleSearchChange(null)}>
        Back
      </button>
      <div className='detailCard'>
        <img
          src={pokemonData.image}
          alt='pokemonImage'
          className='detailImages'></img>
        <div className='detailsContainer'>
          <p className='detailsPokeId'>#{pokemonData.id}</p>
          <p className='detailsPokeName'>{pokemonData.name}</p>
          <p>
            <span style={{ color: 'green' }}> Type: </span>
          </p>
          <ul>
            {pokemonData.types &&
              pokemonData.types.map((type, i) => {
                return <li key={i}>{type}</li>;
              })}
          </ul>
          <p>
            <span style={{ color: 'green' }}>Abilities:</span>
          </p>
          <ul>
            {pokemonData.abilities &&
              pokemonData.abilities.map((ability, i) => {
                return (
                  <li className='pokeMove' key={i}>
                    {ability}
                  </li>
                );
              })}
          </ul>
          <p>
            <span style={{ color: 'green' }}>Height: </span>
            {pokemonData.height / 10} m
          </p>
          <p>
            <span style={{ color: 'green' }}>Weight: </span>
            {pokemonData.weight / 10} kg
          </p>
          <p>
            <span style={{ color: 'green' }}>Habitat: </span>
            {pokemonData.habitat}
          </p>
          <p className='description'> {pokemonData.flavorText} </p>
        </div>
      </div>
    </>
  );
}

export default DetailView;
