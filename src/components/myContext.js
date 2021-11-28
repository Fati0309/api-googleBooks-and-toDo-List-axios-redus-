import React, { useState, useContext } from "react";

//context
const ListContext = React.createContext();

//provider
export function ListProvider({ children }) {
  //variable globale
  const [liste, setliste] = useState([]);

  function toggle(props) {
    setliste(props);
  }

  return (
    <ListContext.Provider value={{ liste, toggle }}>
      {children}
    </ListContext.Provider>
  );
}

//consumer
export const useListe = () => {
  return useContext(ListContext);
};
