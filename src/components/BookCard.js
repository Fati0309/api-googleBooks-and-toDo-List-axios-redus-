import React from "react";
import { useDispatch } from "react-redux";
import { AjouterLivre } from "./redux/livre/action";
const BookCard = ({ src, title, pageCount, language }) => {
  const dispatch = useDispatch();
  const ajouterItems = () => {
    // dispatch()
    dispatch(AjouterLivre());
  };
  return (
    <div className="flex flex-col p-4 border rounded-lg ">
      <img src={src} />
      <div>
        <div>
          {" "}
          <span className="text-semibold">title :</span> {title}
        </div>
        <div>
          {" "}
          <span className="text-semibold">Page Count: </span>
          {pageCount}
        </div>
        <div>
          {" "}
          <span className="text-semibold">language : </span> {language}{" "}
        </div>
        <div
          className="flex justify-center align-center"
          onClick={ajouterItems()}
        >
          {" "}
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
