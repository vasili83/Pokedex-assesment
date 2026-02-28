import APIHandler from 'restful-api-handler'
import { useState, useEffect } from 'react'
import { Button } from '@heroui/react';

import './App.css'



function App() {
  
  const [connectionOK, setConnectionOK] = useState(false);

  const apiConnect = async () => {
    const APIconnection = new APIHandler({baseURL: "http://localhost:5000/api/Pokemon"});
    await APIconnection.check();
    const ok = APIconnection.isOk;
    setConnectionOK(ok);
    return ok;
  }
  const connectionCallback = (ok:boolean) => {
    ok ? console.log("yes! Let's start pokedexing") : console.log("loading");
  }

  useEffect(()=>{
      apiConnect();
  }, []);

  useEffect(()=>{
   connectionCallback(connectionOK); 
  }, [connectionOK]);



  return (
    <>
      <div>
        <Button>Just some test</Button>
      </div>
      <p>
        connectie: {connectionOK ? "OK" : "laden..."}
      </p>
    </>
  )
}

export default App
