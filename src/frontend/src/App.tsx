
import { useState, useEffect } from 'react'
import { ShowItemsGrid } from './components/itemsGrid';
import { apiConnect, api } from './data/apiHandler';

import './App.css'

function App() {
  
  const [connectionOk, setConnectionOk] = useState(false);
  const [freePokemons, setFreePokemons] = useState([]);
  const [pokemonDex, setPokemonDex] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let ok = await apiConnect();
    setConnectionOk(ok);
   if(ok){
      retrieveFreePokemons();
      retrievePokemonDex();
    } else {
      console.error("something went wrong with connection/retrieving");
    }
  }

  const retrieveFreePokemons = async () => {
    const freePokemonsData = await api.loadAllFreePokemons();
    setFreePokemons(freePokemonsData);
  }

  const retrievePokemonDex = async () => {
    const pokemonDexData = await api.loadPokedex();
    setPokemonDex(pokemonDexData);
  }

  const catchPokemon = async (id:number) => {
    await api.addPokemonToDex(id);
    retrievePokemonDex();
  }

  const removePokemon = async (id:number) => {
    await api.removePokemonFromDex(id);
    retrievePokemonDex();
  }

  return (
      <div className="flex gap-6 m-10">
        <ShowItemsGrid title="Pokemons in the wild" jsonData={freePokemons} btnType="catchPokemon" btnCallback={catchPokemon} />
        <ShowItemsGrid title="Pokemons you caught" jsonData={pokemonDex} btnType="deletePokemon" btnCallback={removePokemon} />
      </div>
  );
}

export default App
