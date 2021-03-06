import React from "react";
import { Container, Row } from "react-bootstrap";
import Movie from "./Movie";

const MoviesList = ({ movies, setMovie }) => {
  return (
    <Container>
      <h2 style={{ marginTop: "1rem" }}>¿Qué vas a ver hoy?</h2>
      <Row>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Movie key={index} movie={movie} setMovie={setMovie} />
          ))
        ) : (
          <p>No se encontraron películas. Ingrese un título válido.</p>
        )}
      </Row>
      <p
        className="fixed-bottom"
        style={{ textAlign: "right", fontSize: "20px", marginRight: "1rem" }}
      >
        El mejor cine aquí...
      </p>
    </Container>
  );
};

export default MoviesList;
