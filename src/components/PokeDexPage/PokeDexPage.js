import React from 'react'
import PokeDexCard from '../PokeDexCard/PokeDexCard'
import './PokeDexPage.css'

export default function PokeDexPage(props) {
  const pokemonId = []
  for (let i = props.firstItem; i <= props.lastItem; i++) {
    pokemonId.push(i)
  }
  return (
    <div className='Pokedex-page'>
      {pokemonId.map(pokemonId => <PokeDexCard number={pokemonId} />)}
    </div>
  );
}


