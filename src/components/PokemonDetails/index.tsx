import { Url } from "url";
import { Content } from "./style";

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
    <Content >
      <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
      <p>{props.pokemon.name}</p> 
      <p>{props.pokemon.id}</p>
      <p>{props.pokemon.height}</p>  
      <p>{props.pokemon.weight}</p> 
      <p>{props.pokemon.types[0].type.name}</p> 
    </Content>
  )
}