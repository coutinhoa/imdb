import React, { useState } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import { limitTitle } from "./helpers/limitTitle";

export const Movie = ({ movie }) => {
  //console.log(movie);

  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="moving-picture">
      <div className="image">
        <img src={movie.picture} alt="item" className="image" />
      </div>
      <div className="movie_specifications">
        <div>
          <span className="star-fill">
            <i className="bi bi-star-fill"></i>
          </span>
          <span className="rating">{movie.rating}</span>
          <span className="star" onClick={handleFavorite}>
            {favorite ? (
              <i className="bi bi-star-fill"></i>
            ) : (
              <i className="bi bi-star"></i>
            )}
          </span>
        </div>
        <div className="details-link">
          <Link
            className="title"
            to={`/movie-details/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            {limitTitle(25, movie.title)}
          </Link>
        </div>
        <div>
          <p className="whatchlist">+ Whatchlist</p>
          <div>
            <button className="trailer">
              <i className="bi bi-play-fill"></i>
              <a href={movie.trailer} className="a">
                Trailer
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
