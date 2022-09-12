import { Card, Content, Types } from "./style"

type PokemonDetailsProps = {
  pokemon: {
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
} 

export function PokemonDetails(props: PokemonDetailsProps) {
  return (
    <Card >
      <Content>
        <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
          <h3>Nº {props.pokemon.id}</h3>
          <h2>{props.pokemon.name}</h2> 
        <Types>
          <p>{props.pokemon.types[0].type.name}</p>
          <p>{props.pokemon.types[1].type.name}</p>
        </Types>
      </Content>
    </Card>
  )
}