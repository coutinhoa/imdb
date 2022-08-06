import "./MovieDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams(); //we use useParams when we wanna get the id from the url or other parameter
  const [details, setDetails] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/movies/${params.id}.json`)
      .then((response) => response.json())
      .then((response) => setDetails(response))
      .catch((error) => setError(true));
  }, []);

  if (!details) {
    return <h1 className="error">"Movie not found"</h1>;
  }

  return (
    <div className="Movie-details">
      <div className="header-movie-details">
        <div className="title-container">
          <h1>{details.title}</h1>
          <p>{details.releaseYear}</p>
        </div>
        <div className="ratings-container">
          <div className="ratings">
            <p className="rating-title">IMDb-BEWERTUNG</p>
            <div className="stars-rating">
              <span className="star-rating">
                <i className="bi bi-star-fill"></i>
              </span>
              <span>
                <span className="total-ratings">{details.rating} </span>
                <span>/ 10</span>
                <p className="number-votes"> {details.totalRatings}</p>
              </span>
            </div>
          </div>
          <div className="ratings">
            <p className="rating-title">IHRE BEWERTUNG</p>
            <p>{details.popularity}</p>
          </div>
          <div className="ratings">
            <p className="rating-title">BELIEBTHEIT</p>
            <p>{details.popularityChange}</p>
          </div>
        </div>
      </div>
      <div className="body-details">
        <div>
          <img src={details.picture} alt="item" className="images" />
        </div>
        <div>
          <div className="tags">
            {details.tags.map((movie_tag, index) => {
              return (
                <>
                  <div key={index} movie_tag={movie_tag}>
                    <p>
                      <span className="tag">{movie_tag}</span>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className="description">{details.description}</p>
          <div>
            <div>
              {details.people.map((person, index) => {
                return (
                  <>
                    <div key={index} person={person}>
                      <span className="roles">{person.roles}</span>
                      <div className="roles-hl"></div>
                    </div>
                    <span className="name">{person.name}</span>
                    <div className="roles-hl"></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
