import React from "react";
import { Container, Row } from "react-bootstrap";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <Container>
      <h2 style={{ marginTop: "1rem" }}>¿Qué vas a ver hoy?</h2>
      <Row >
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </Row>
      <p className="fixed-bottom" style={{ textAlign: "right", fontSize:'20px', marginRight: '1rem' }}>
        El mejor cine aquí...
      </p>
    </Container>
  );
};

export default MoviesList;
