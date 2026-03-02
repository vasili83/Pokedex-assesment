
import { useState, useEffect, type ReactNode } from 'react'
import { ShowItemsGrid } from './components/itemsGrid';
import { ErrorModal } from './components/errormodal';
import { apiConnect, api } from './data/apiHandler';

import './App.css'

function App() {
  
  const [connectionOk, setConnectionOk] = useState(false);
  const [freePokemons, setFreePokemons] = useState([]);
  const [pokemonDex, setPokemonDex] = useState([]);
  const [errormodal, setErrormodal] = useState<ReactNode>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let ok = await apiConnect();
    setConnectionOk(ok);
   if(ok){
      retrieveFreePokemons();
      retrievePokemonDex();
      setErrormodal('');
    } else {
      setErrormodal(<ErrorModal content="something went wrong with connection/retrieving" />);
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
    if(!connectionOk) return;
    await api.addPokemonToDex(id);
    retrievePokemonDex();
  }

  const removePokemon = async (id:number) => {
    if(!connectionOk) return;
    await api.removePokemonFromDex(id);
    retrievePokemonDex();
  }

  return (
    <>
      {errormodal}
      <div className="flex gap-6 m-10">
        <ShowItemsGrid title="Pokemons in the wild" jsonData={freePokemons} btnType="catchPokemon" btnCallback={catchPokemon} />
        <ShowItemsGrid title="Pokemons you caught" jsonData={pokemonDex} btnType="deletePokemon" btnCallback={removePokemon} />
      </div>
    </>
  );
}

export default App
