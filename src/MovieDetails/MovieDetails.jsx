import "./MovieDetails.css";
import React, { Fragment, useEffect, useState } from "react";
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

  const getPeopleRoles = (people) => {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      for (let j = 0; j < person.roles.length; j++) {
        const role = person.roles[j];
        //console.log(role);
        if (!result.includes(role)) {
          result.push(role);
        }
      }
    }
    return result;
  };
  const peopleRoles = getPeopleRoles(details.people);
  //console.log(peopleRoles);

  const getActorsByRole = (role) => {
    return details.people
      .filter((item) => {
        return item.roles.includes(role);
      })
      .map((i) => i.name);
  };

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
        <div className="movie-details">
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
            {peopleRoles.map((role, index) => (
              <div className="roles-people" key={index}>
                <span className="roles">{role}</span>
                <ul>
                  <li>
                    {getActorsByRole(role).map((name, index) => (
                      <span key={index} className="name">
                        {name}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
