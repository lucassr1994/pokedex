import React from 'react'
import PokeDexCard from '../PokeDexCard/PokeDexCard'
import './PokeDexPage.css'

export default function PokeDexPage({ firstItem, lastItem }) {
  const listLength = lastItem - firstItem + 1
  const listArray = (new Array(listLength)).fill(0)
  return (
    <div className='Pokedex-page'>
      {listArray.map((_, index) => renderPokeDexCard(index + firstItem))}
    </div>
  );
}

function renderPokeDexCard(number) {
  return (
    <PokeDexCard
      key={getPokeDexCardKey(number)} 
      number={number}
    />
  )
}

function getPokeDexCardKey(number) {
  return `poke-dex-card-${number}`
}


