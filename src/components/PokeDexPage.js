import React from 'react'
import PokeDexCard from './PokeDexCard'

export default function PokeDexPage(props) {
const pokemonId = []
  for(let i = props.firstItem; i<=props.lastItem; i++ ){
      pokemonId.push(i)
  }
  return (
    <div>
      {pokemonId.map(pokemonId => <PokeDexCard number={pokemonId} />)}
    </div>
  );
}


