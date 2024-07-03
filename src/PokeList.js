// PokeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  SearchBar,
  PokemonCard,
  PokemonImage,
  AbilitiesList,
  AbilityItem
} from './StyledComponents';

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const { results } = response.data;
        const pokemonData = await Promise.all(
          results.map(async pokemon => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );
        setPokemonList(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Header>
        <h1>Pokemon Details</h1>
      </Header>
      <SearchBar
        type="text"
        placeholder="Search Pokemon..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredPokemon.map(pokemon => (
          <PokemonCard key={pokemon.id} primary={pokemon.id % 2 === 0}>
            <h3>{pokemon.name}</h3>
            <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Abilities:</p>
            <AbilitiesList>
              {pokemon.abilities.map((ability, index) => (
                <AbilityItem key={index}>{ability.ability.name}</AbilityItem>
              ))}
            </AbilitiesList>
          </PokemonCard>
        ))}
      </ul>
    </Container>
  );
};

export default PokeList;
