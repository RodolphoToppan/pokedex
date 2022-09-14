import { FormEvent, useState } from "react";
import { Card, Container, Infos, Types } from "./style";
import searchImg from '../../assets/search.svg'


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
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon([data]));
  }

  return (
      <Container>
          <h3>Insira o nome de um Pokémon ou um número (1-905)</h3>
        <form onSubmit={handleGetPokemon}>
          <input 
          type= "name" 
          onChange={event => setPokemonName(event.target.value.toLowerCase())}
          />
          <button>
            <img src={searchImg} alt="Search" />
          </button>
        </form>
        {pokemon.map(data => { 
          if (data.types.length == 1) {
            return (
              <Card>
              <Infos>
                <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
                <h3>Nº {data.id}</h3>
                <h2>{data.name}</h2>
                <Types>
                  <p>{data.types[0].type.name}</p>
                </Types>
              </Infos>
              </Card>
            )
          } else if (data.types.length == 2) {
            return (
            <Card>
            <Infos>
              <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
              <h3>Nº {data.id}</h3>
              <h2>{data.name}</h2>
              <Types>
                <p>{data.types[0].type.name}</p>
                <p>{data.types[1].type.name}</p>
              </Types>
            </Infos>
            </Card>
            )}
        })}
      </Container>
  )
}