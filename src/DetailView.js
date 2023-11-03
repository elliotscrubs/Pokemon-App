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
          habitat: jsonSpecies.habitat?.name,
          flavorText: removeDuplicates(
            jsonSpecies.flavor_text_entries
              .filter(flavor_text =>
                flavor_text.language.name === 'en' ? flavor_text : ''
              )
              .map(text => text.flavor_text.replace(/\u000c/g, ' '))
              ),
        });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [props.pokemonsUrl]);

  function removeDuplicates(flavor_text) {
    return flavor_text.reduce(
      (acc, curr) =>
        acc
          .map(str => str.toLowerCase().replaceAll(/\s/g, ''))
          .includes(curr.toLowerCase().replaceAll(/\s/g, ''))
          ? acc
          : [...acc, curr],
      []
    );
  }

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
          <div className='table'>
            <p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                {' '}
                Type:{' '}
              </span>
            </p>
            {pokemonData.types &&
              pokemonData.types.map((type, i) => {
                return <p key={i}> {type} </p>;
              })}
            <p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Abilities:
              </span>
            </p>
            {pokemonData.abilities &&
              pokemonData.abilities.map((ability, i) => {
                return (
                  <p className='pokeMove' key={i}>
                    {ability}
                  </p>
                );
              })}
            <p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Height:{' '}
              </span>
              {pokemonData.height / 10} m
            </p>
            <p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Weight:{' '}
              </span>
              {pokemonData.weight / 10} kg
            </p>
            <p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                Habitat:{' '}
              </span>
              {pokemonData.habitat}
            </p>
          </div>
          <p>
            <span style={{ color: 'green', fontWeight: 'bold'  }}>
              Descriptions:
            </span>
            {pokemonData.flavorText &&
              pokemonData.flavorText.map((text, i) => {
                return <p key={i}> {text} </p>;
              })}
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailView;
