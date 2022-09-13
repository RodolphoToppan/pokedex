import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { GlobalStyle } from "../styles/global";

export function Home() {
  return (
    <>
      <Header/>
      <PokemonList/>
      <GlobalStyle/>
    </>
  )
}