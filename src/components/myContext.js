import React, { useState, useContext } from "react";

//context
const ListContext = React.createContext();

//provider
export function ListProvider({ children }) {
  //variable globale
  const [liste, setliste] = useState(["one", "two"]);
  return (
    <ListContext.Provider value={{ liste, setliste }}>
      {" "}
      {children}
    </ListContext.Provider>
  );
}

//consumer
export const useListe = () => {
  return useContext(ListContext);
};
