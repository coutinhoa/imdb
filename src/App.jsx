import { useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./Movie/Movie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((response) => setMovies(response)); // puts the response into the movies variable
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h2 className="header-one">Fan-Favoriten </h2>
        <p className="header-two">Top-Serien und -Filme dieser Woche</p>
      </div>
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
