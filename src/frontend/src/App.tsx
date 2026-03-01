
import { useState, useEffect } from 'react'
import { ShowItemsGrid } from './components/itemsGrid';
import { apiConnect, api } from './data/apiHandler';

import './App.css'

function App() {
  
  const [freePokemons, setFreePokemons] = useState([]);
  const [pokemonDex, setPokemonDex] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async ()=>{
    const connectionOk = await apiConnect();
    const freePokemonsData = connectionOk && await api.loadAllFreePokemons();
    setFreePokemons(freePokemonsData);
    const pokemonDexData = connectionOk && await api.loadPokedex();
    setPokemonDex(pokemonDexData);
  }

  const catchPokemon = (id) => {
    api.addPokemonToDex(id);
  }

  const removePokemon = (id) => {
    api.removePokemonFromDex(id);
  }

  return (
      <div className="flex gap-6 m-10">
        <ShowItemsGrid title="Pokemons in the wild" jsonData={freePokemons} btnType="catchPokemon" btnCallback={catchPokemon} />
        <ShowItemsGrid title="Pokemons you caught" jsonData={pokemonDex} btnType="deletePokemon" btnCallback={removePokemon} />
      </div>
  );
}

export default App
