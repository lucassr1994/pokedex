import React from 'react'
import PokeDexCard from '../../components/PokeDexCard/PokeDexCard'
import './FirstPokemon.css';

export default function FirstPokemon() {
  const dragStartHandler = (event) => {
  }
  const dragOverHandler = (event) => {
  }
  const dropHandler = (event) => {
  }
  return (
    <div className="FirstPokemon-page">
      <div className="Pokemon-options">
        <div draggable="true" onDragStart={dragStartHandler}>
          <PokeDexCard number={1} />
        </div>
        <div draggable="true">
          <PokeDexCard number={4} />
        </div>
        <div draggable="true">
          <PokeDexCard number={7} />
        </div>
      </div>
      <div className="Choosed-pokemon" onDragOver={dragOverHandler} onDrop={dropHandler}>

      </div>
    </div>
  );
}
