import React from 'react'
import PokeDexCard from '../../components/PokeDexCard'

export default function FirstPokemon() {
  return (
    <div>
      <div draggable="true">
        <PokeDexCard number={1} />
      </div>
      <div draggable="true">
        <PokeDexCard number={4} />
      </div>
      <div draggable="true">
        <PokeDexCard number={7} />
      </div>
    </div>
  );
}
