import { FormEvent, useEffect, useState } from "react";
import api_individual from "../../services/apiIndividuals";
import { PokemonDetails } from "../PokemonDetails";
import { Content } from "./style";


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
  const [pokemonName, setPokemonName] = useState('')

  
  function handleGetPokemon(event: FormEvent) {
    event.preventDefault()
    console.log(pokemonName)
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/212`)
      .then(response => response.json())
      .then(data => setPokemon([data]))
  }, [pokemonName])
  
  return (
    <Content>
    <div>
      <form onSubmit={handleGetPokemon}>
        <input 
        type="text" 
        onChange={event => setPokemonName(event.target.value.toLowerCase())}
        />
      </form>
      {pokemon.map(data => { 
        return <PokemonDetails key={data.id} pokemon={data}/>
      })}
    </div>
    </Content>
  )
}