import React from 'react'
import { Col } from "react-bootstrap";

const Movie = ({movie}) => {
  return (
    <Col xs={6} lg={2}>
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <span className="tiptext">{movie.vote_average}</span>
      </div>
      </Col>
  )
}

export default Movie