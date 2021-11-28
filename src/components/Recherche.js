import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function Recherche() {
  const [value, setvalue] = useState("");
  const [liste, setliste] = useState([]);
  const onChangeTitre = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .then((res) => {
        setliste(res.data?.items);
        console.log(liste);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex  text-center justify-center bg-gray-200 items-center flex-col">
      <p className=" py-8">
        {" "}
        Indique le sujet du livre à rechercher sur Google API{" "}
      </p>
      <div className="">
        <input
          className="  m-4 p-2 h-10"
          type="text"
          placeholder="Quoi rechercher ?"
          onChange={(e) => {
            onChangeTitre(e);
          }}
        />
        <input
          className="bg-gray-500 text-white cursor-pointer text-bold text-lg    mx-4 p-2 h-10"
          type="button"
          value="Rechercher"
          onClick={() => handleSubmit()}
        />
      </div>
      <div className="grid grid-cols-4 justify-start text-left">
        {liste.map((item) => {
          return (
            <BookCard
              src={item.volumeInfo?.imageLinks?.thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              Auter={item.volumeInfo.authors}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recherche;
