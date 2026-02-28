import APIHandler from 'restful-api-handler'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>
        connectie: {connectionOK ? "OK" : "laden..."}
      </p>
    </>
  )
}

export default App
