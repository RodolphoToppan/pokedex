import { Container } from "./style";

import searchImg from '../../assets/search.svg'

export function Header() {
  return (
    <Container>
      <h1>Poke<span>DB</span></h1>
      <form>
        <input type="submit" />
        <img src={searchImg} alt="Search" />
      </form>
    </Container>
  )
}