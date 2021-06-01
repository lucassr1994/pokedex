import React from 'react'
import PokeDexCard from '../../components/PokeDexCard/PokeDexCard'
import './FirstPokemon.css';

export default function FirstPokemon() {
  const dragStartHandler = (event) => {
    event
    .dataTransfer
    .setData('text/plain', event.target.id);
  }
  const dragOverHandler = (event) => {
    event.preventDefault()
  }
  const dropHandler = (event) => {
    const id = event
    .dataTransfer
    .getData('text')
    const draggableElement = document.getElementById(id)
    const dropzone = event.target
    dropzone.appendChild(draggableElement)
    event
    .dataTransfer
    .clearData()
  }
  return (
    <div className="FirstPokemon-page">
      <div className="Pokemon-options">
        <div id="draggable-1" draggable="true" onDragStart={dragStartHandler}>
          <PokeDexCard number={1} />
        </div>
        <div id="draggable-2" draggable="true" onDragStart={dragStartHandler}>
          <PokeDexCard number={4} />
        </div>
        <div id="draggable-3" draggable="true" onDragStart={dragStartHandler}> 
          <PokeDexCard number={7} />
        </div>
      </div>
      <div className="Choosed-pokemon" onDragOver={dragOverHandler} onDrop={dropHandler}>
        Drag and drop here your firsT pokemon!
      </div>
    </div>
  );
}
