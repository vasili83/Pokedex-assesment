
import { useState, useEffect } from 'react'
import { showItemsGrid } from './components/itemsGrid';
import { Button } from '@heroui/react';
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
    console.dir(freePokemons);
    setFreePokemons(freePokemons);
  }

  return (
    <>
        {showItemsGrid(freePokemons)}
    </>
  );
}

export default App
