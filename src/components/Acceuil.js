import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../store";
import { AjouterLivre, SuppLivre } from "./redux/livre/action";
import React from "react";

import { useListe } from "./myContext";

export default function Acceuil() {
  const [titre, setTitre] = useState("");
  const [Auter, setAuter] = useState("");
  const { liste, toggle } = useListe();


  const onChangeTitre = (e) => {
    setTitre(e.target.value);
  };

  const onChangeAuter = (e) => {
    setAuter(e.target.value);
  };

  const Item = ({ titre, auteur }) => {
    return (
      <div className="flex  p-4">
        <div className=" flex flex-1">
          <p className="m-2">{titre}</p>
          <p className="m-2">{auteur}</p>
        </div>
        <div className=" flex  flex-1 flex-col justify-center item-end">
          <button onClick={supItems}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    if (titre === "") {
      alert("ecrire votre etape");
    } else {
      let x = liste;
      console.log(Auter);
      toggle([...x, { titre, Auter }]);
      dispatch(AjouterLivre());
    }
  };

  const supItems = () => {
    let x = liste;
    x.splice(x.indexOf(titre), 1);
    toggle([...x]);
    console.log(liste);
    dispatch(SuppLivre());
    console.log("nombre des livre est", store.getState().livre);
  };
  console.log(liste);
  const dispatch = useDispatch();

  const onclick = (e) => {
    handleSubmit();
    setTitre("");
    setAuter("");
    console.log("nombre des livre est", store.getState().livre);
  };
  return (
    <form className="flex  text-center justify-center bg-gray-200 items-center flex-col">
      <p className=" py-8"> Ajouter un livre ?? votre biblioth??que</p>
      <div className="flex justify-between ">
        <input
          className="  mx-4 p-2 h-10"
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => {
            onChangeTitre(e);
          }}
        />
        <input
          className="  mx-4 p-2 h-10 "
          type="text"
          placeholder="Auter"
          value={Auter}
          onChange={(e) => {
            onChangeAuter(e);
          }}
        />
      </div>
      <input
        className="bg-gray-500 text-white cursor-pointer text-bold text-lg   m-4 p-3"
        type="button"
        value="Ajouter un livre"
        onClick={() => onclick()}
      />
      <div id="footer" className="bg-gray-100 text center w-full  ">
        {liste.map((item) => {
          return <Item titre={item.titre} auteur={item.Auter} />;
        })}
      </div>
    </form>
  );
}
