import { useEffect, useState } from "react"

export default function usePokemon(number) {
    const [pokemon, setPokemon] = useState(getPokemon(number))

    useEffect(() => {
        setPokemon(getPokemon(number))
    }, [number])

    useEffect(() => {
        if (!pokemon && !getPokemon(number)) {
            fetchPokemon(number).then(cachePokemon).then(setPokemon)
        }
    }, [pokemon, number])

    return pokemon
}

function getPokemonId(number) {
    return `pokemon-${number}`
}

function formatData(data) {
    return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map(({ type: { name } }) => name)
    }
}

function getPokemon(number) {
    return JSON.parse(window?.localStorage.getItem(getPokemonId(number)))
}

function cachePokemon(number, payload) {
    window?.localStorage.setItem(getPokemonId(number), JSON.stringify(payload))
    return payload
}

function fetchPokemon(number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(resp => resp.json())
        .then(formatData)
}