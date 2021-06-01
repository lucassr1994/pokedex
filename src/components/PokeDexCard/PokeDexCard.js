import React, { useEffect, useState } from 'react'
import './PokeDexCard.css'

export default function PokeDexCard({ number }) {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then(resp => resp.json())
      .then(setPokemon)
  }, [number])
  return (
    <div className='Pokedex-card'>
      <div>{pokemon?.id} - {pokemon?.name}</div>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name}></img>
      <div>Height: {pokemon?.height}</div>
      <div>Weight: {pokemon?.weight}</div>
      <div>Types:</div>
      {pokemon?.types.map((types) => (<div>{types.type.name}</div>))}
    </div>
  );
}
