import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const Movie = ({ movie, setMovie }) => {

  return (
    <Col xs={6} lg={2}>
      <div className="movie">
        <Link to={`/movie`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onClick ={() => setMovie(movie)}
          />
        </Link>
        <span className="tiptext">{movie.vote_average}</span>
      </div>
    </Col>
  );
};

export default Movie;
