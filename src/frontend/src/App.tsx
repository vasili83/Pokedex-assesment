import APIHandler from 'restful-api-handler'
import { useState, useEffect } from 'react'
import { Button } from '@heroui/react';

import './App.css'



function App() {
  
  const [connectionOK, setConnectionOK] = useState(false);
  const [allPokemons, setAllPokemons] = useState();

  const APIconnection = new APIHandler({baseURL: "http://localhost:5000/api/Pokemon"}); // TODO: health endpoint toevoegen?

  const apiConnect = async () => {
    await APIconnection.check();
    const ok = APIconnection.isOk;
    setConnectionOK(ok);
    return ok;
  }
  const connectionCallback = (ok:boolean) => {
    ok ? loadData() : console.log("loading..");
  }
  const loadData = () => {
    // TODO: veranderen naar /Pokemon zodra /health klaar is.
    APIconnection.requestJSON("/")
    .then((response)=>{
      console.log(response);
      showPokemon(JSON.parse(response));
    })
    .catch((err)=>showError("something went wrong with the Pokemons(dex)", err));
  }
  const showPokemon = (jsonData:Record<string, any>[]) => {
    const allP = jsonData.map((item) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <img src={item.sprites.front_default} />
        </div>
      );
    });
    setAllPokemons(allP);
  }
  const showError = (title, mssg) => {
    console.error(title, mssg);
  }

  useEffect(()=>{
      apiConnect();
  }, []);

  useEffect(()=>{
   connectionCallback(connectionOK); 
  }, [connectionOK]);

  return connectionOK ?
  (
    <>
      <div className="grid grid-cols-3 gap-4">
        {allPokemons}
      </div>
    </>
  ) : (
    <>
      trying to load....
    </>
  )
}

export default App
