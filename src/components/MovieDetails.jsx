import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Col,
} from "react-bootstrap";
import { IoArrowUndoSharp } from "react-icons/io5";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Container className="movie-container d-flex justify-content-center align-items-center">
        <Col lg={1}>
          <Link to={`/`}>
            <IoArrowUndoSharp size={50} color="#a072b2" />
          </Link>
        </Col>
        <Col xs={6} lg={4}>
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </Card>
        </Col>
        <Col xs={6} lx={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2>{movie.title}</h2>
              </Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <b>Fecha de estreno:</b> {movie.release_date}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <b>Puntuación:</b> {movie.vote_average}
            </ListGroupItem>
            <ListGroupItem>
              <b>Lenguaje original:</b> {movie.original_language}
            </ListGroupItem>
            <ListGroupItem>
              <b>Título Original:</b> {movie.original_title}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    </>
  );
};

export default MovieDetails;
