import React, { useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./Movie/Movie";
import { MovieType } from "./types/movie";

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchMovieText, setSearchMovieText] = useState("");

  /*useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((response) => setMovies(response)); // puts the response into the movies variable
  }, []);
  // we are using api now*/

  const fetchMovies = () => {
    fetch("http://localhost:4100/api/movies")
      .then((response) => response.json() as Promise<MovieType[]>)
      .then((response) => {
        setMovies(response);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleChange = (event: any) => {
    const inputSearch = event.target.value;
    setSearchMovieText(inputSearch);

    if (inputSearch === "") {
      console.log("i am empty");
      fetchMovies();
    }
  };

  const pressEnterKey = (event: any) => {
    //console.log("enter pressed");
    if (event.key === "Enter") {
      event.preventDefault();
      searchMovies();
    }
  };

  const searchMovies = () => {
    //console.log("i made a request");
    fetch(`http://localhost:4100/api/movies?search=${searchMovieText}`, {
      method: "GET",
    })
      .then((response) => response.json() as Promise<MovieType[]>)
      .then((response) => {
        setMovies(response);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-wrapper">
          <h2 className="header-one">Fan-Favoriten </h2>
          <p className="header-two">Top-Serien und -Filme dieser Woche</p>
        </div>
        <div className={`header-search-button ${searchActive && "active"}`}>
          <input
            className="input-movie"
            type="text"
            value-autocomplete="Off"
            placeholder="IMDb durchsuchen"
            aria-label="IMDb durchsuchen"
            onClick={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
            onChange={handleChange}
            onKeyDown={pressEnterKey}
          ></input>
          <button
            type="submit"
            className="submit-search"
            onClick={searchMovies}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      {movies.length === 0 ? (
        <div className="movie-not-found">Movie Not Found</div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
