import React from 'react'
import usePokemon from '../../hooks/usePokemon'
import './PokeDexCard.css'

export default function PokeDexCard({ number }) {
  const pokemon = usePokemon(number)

  return (
    <div className='Pokedex-card'>
      <div>{pokemon?.id} - {pokemon?.name}</div>
      <img src={pokemon?.image} alt={pokemon?.name}></img>
      <div>Height: {pokemon?.height}</div>
      <div>Weight: {pokemon?.weight}</div>
      <div>Types:</div>
      {pokemon?.types.map((typeName) => (<div key={`pokemon-type-${typeName}`}>{typeName}</div>))}
    </div>
  );
}