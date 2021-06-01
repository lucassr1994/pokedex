import { Avatar, Card, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export default function PokeDexCard({ number }) {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then(resp => resp.json())
      .then(setPokemon)
  }, [number])
  return (
    <Card>
      <Typography>{pokemon?.name}</Typography>
      <Avatar>{pokemon?.id}</Avatar>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name}></img>
      <Typography>Height: {pokemon?.height}</Typography>
      <Typography>Weight: {pokemon?.weight}</Typography>
      <Typography>Types:</Typography>
      {pokemon?.types.map((types) => (<Typography>{types.type.name}</Typography>))}
    </Card>
  );
}
