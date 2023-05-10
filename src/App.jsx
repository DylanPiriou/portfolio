import React, { useEffect } from "react";
import Router from "./Router";
import { useLocation } from "react-router-dom";

function App() {

  // Gestion du titre du site en fonction de la page affichée
  const location = useLocation();
  useEffect(() => {
    const pageTitle = handlePageTitle(location.pathname);
    document.title = `${pageTitle} — Dylan Piriou`;
  }, [location.pathname])

  const handlePageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/projects':
        return 'Projects';
      default:
        return 'Portfolio';
    }
  }

  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App
