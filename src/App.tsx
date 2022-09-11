import { Header } from './components/Header';
import { PokemonList } from './components/PokemonList';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header/>
      <PokemonList/>
      <GlobalStyle/>
    </>
  );
}

export default App