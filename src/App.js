import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";
import { discoverMovies, searchMovies } from "./services/MovieService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeStar, setActiveStar] = useState(0);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    discoverMovies().then((data) => setMovies(data.results));

    if (searchValue.length > 0) setActiveStar(0);
  }, [searchValue]);

  if (searchValue.length <= 0) {
    discoverMovies(activeStar).then((data) => setMovies(data.results));
  } else {
    searchMovies(searchValue, activeStar).then((data) =>
      setMovies(data.results)
    );
  }

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        activeStar={activeStar}
        setActiveStar={setActiveStar}
      />
      <Routes>
        <Route path="/" element={<MoviesList movies={movies} setMovie={setMovie}/>}/>
        <Route path="/movie" element={<MovieDetails movie={movie} />} />
      </Routes>
    </>
  );
};

export default App;
