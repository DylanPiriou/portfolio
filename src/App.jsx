import React, { useEffect } from "react";
import Router from "./Router";
import { useLocation } from "react-router-dom";

function App() {

  // Gestion du titre du site en fonction de la page affichée
  const location = useLocation();
  const name = location.pathname
  if(name === "/"){
    document.title = `Home — Dylan Piriou`;
  } else if (name === "/about"){
    document.title = `About — Dylan Piriou`;
  } else if(name === "/projects"){
    document.title = `Projects — Dylan Piriou`;
  } else if(name === "/contact"){
    document.title = `Contact — Dylan Piriou`;
  } else {
    document.title = `Dylan Piriou — French web developer`;
  }

  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App
