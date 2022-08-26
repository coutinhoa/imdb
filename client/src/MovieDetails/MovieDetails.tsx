import "./MovieDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../types/movie";
import { Person } from "../types/person";
import { getRoles } from "./utils/getRoles";
import { getPeopleNameByRole } from "./utils/getPeopleNameByRole";

function MovieDetails() {
  const params = useParams(); //we use useParams when we wanna get the id from the url or other parameter
  const [details, setDetails] = useState<MovieType>();
  const [moviePeople, setMoviePeople] = useState<Person[]>([]);

  const fetchDetails = () => {
    fetch(`http://localhost:4100/api/movies/${params.id}`)
      .then((response) => response.json() as Promise<MovieType>)
      .then((response) => {
        setDetails(response);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    fetch(`/movies/${params.id}.json`)
      .then((response) => response.json() as Promise<MovieType>)
      .then((response) => setMoviePeople(response.people));
  }, []); //for roles we are still using json

  if (!details) {
    return <h1 className="error">"Loading..."</h1>;
  }

  //getting roles and the respective names
  //first: the function getPeopleRoles gets and array with strings of the roles
  const peopleRoles = getRoles(moviePeople); //if roleDetails.people is undefined then we pass an empty array
  console.log(peopleRoles);

  // move to auxiliar function and write tests
  // make function pure by only depending on its own arguments
  // PURE FUNCTIONS ONLY DEPEND ON THEIR OWN ARGUMENTS
  // IF THEY HAVE NO ARGUMNENTS THEY SHOULD NOT DEPEND ON ANYTHING

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
            {details.tags.map((movie_tag: string, index: number) => {
              return (
                <>
                  <div key={index}>
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
                    {getPeopleNameByRole(role, moviePeople).map(
                      (name, index) => (
                        <span key={index} className="name">
                          {name}
                        </span>
                      )
                    )}
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
