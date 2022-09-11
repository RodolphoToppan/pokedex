import { useEffect, useState } from "react";
import { PokemonDetails } from "../PokemonDetails";


type Pokemon = {
  id: number,
  sprites: {
    "other": {
      "official-artwork": {
        "front_default": string
      }
    }
  },
  name: string,
  height: number,
  weight: number,
  types: Array<{
    type: {
      name: string,
    }
  }>
}


export function PokemonList() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/35`)
      .then(response => response.json())
      .then(data => setPokemon([data]))
  }, [])
  
  return (
    <div>
      {pokemon.map(data => { 
        return <PokemonDetails key={data.id} pokemon={data}/>
      })}
    </div>
  )
}