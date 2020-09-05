import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Player from "./Components/Player";
import "./App.css";
import { getTokenFromURL } from "./Config/spotify";

function App() {
  const [token, setToken] = useState(null);
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
