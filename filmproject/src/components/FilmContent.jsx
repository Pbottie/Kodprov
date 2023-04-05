import { useEffect, useState, React } from "react";

import "./FilmContent.css";
import FilmCard from "./FilmCard";
function FilmContent() {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [isSorted, setisSorted] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function sortFilmsAndSet() {
    const sortedFilms = sortFilms(data);
    setData(sortedFilms);
    setisSorted(true);
  }

  function sortFilms(filmsArray) {
    const sortedFilms = [...filmsArray].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });

    return sortedFilms;
  }

  function filterFilms(e) {
    const foundText = new RegExp(e.target.value.toString().toLowerCase());
    let filteredFilms = dataCopy.filter(
      (film) => foundText.test(film.title.toString().toLowerCase()) && film
    );
    isSorted && (filteredFilms = sortFilms(filteredFilms));
    setData(filteredFilms);
  }

  const getData = async () => {
    const result = await fetch("/feed/sample.json");
    const toJson = await result.json();
    setData(toJson.entries);
    setDataCopy(toJson.entries);
  };

  return (
    <section>
      <div className="sortandfilter">
        <button className="sort" onClick={sortFilmsAndSet}>
          Sort A-Z
        </button>
        <input
          type="text"
          className="filter"
          placeholder="Type to filter..."
          onChange={filterFilms}
        />
      </div>
      <div className="filmcontent">
        {data.map((element) => {
          return (
            element.programType == "movie" && (
              <FilmCard key={element.title + "movie"} film={element} />
            )
          );
        })}
      </div>
    </section>
  );
}

export default FilmContent;
