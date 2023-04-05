import React from "react";
import "./FilmCard.css";

function FilmCard({ film }) {
  let url = film.images["Poster Art"].url;
  fetch(url).then((response) => {
    !response.ok && (url = "/assets/placeholder.png");
  });

  return (
    <div className="card" key={film.title}>
      <img src={url} />
      <div>{film.title}</div>
    </div>
  );
}

export default FilmCard;

//<img src={film.images["Poster Art"].url}/>
