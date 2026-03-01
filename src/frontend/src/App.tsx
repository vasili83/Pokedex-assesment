
import { useState, useEffect } from 'react'
import { showItemsGrid } from './components/itemsGrid';
import { apiConnect, api } from './data/apiHandler';

import './App.css'

function App() {
  
  const [freePokemons, setFreePokemons] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async ()=>{
    const connectionOk = await apiConnect();
    const freePokemons = connectionOk && await api.loadAllFreePokemons();
    setFreePokemons(freePokemons);
  }

  return (
    <>
        {showItemsGrid(freePokemons)}
    </>
  );
}

export default App
