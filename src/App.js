import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Recherche from "./components/Recherche";
// import { ListProvider } from "./components/myContext";

export default function App() {
  return (
    // <ListProvider>
    <Router>
      <div className="App">
        <div className="bg-gray-500  p-4 flex flex-col justify-center ">
          <div className="flex">
            <div className="flex-1 rounded cursor-pointer  mx-4 p-2 text-center text-gray-500 bg-white ">
              <Link to="/">
                
                <a> Accueil</a>
              </Link>
            </div>
            <div className="flex-1 rounded p-2 text-center cursor-pointer text-gray-500 bg-white">
              <Link to="recherche">
                
                <a> Rechercher</a>
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="recherche" element={<Recherche />} />
        </Routes>
      </div>
    </Router>
    // </ListProvider>
  );
}
