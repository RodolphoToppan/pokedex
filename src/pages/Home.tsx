import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import api from "../services/api";

export function Home() {
  
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, [])
  
  return (
    <>
      <Header/>
      <GlobalStyle/>
    </>
  )
}