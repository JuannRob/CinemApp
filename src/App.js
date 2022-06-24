import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movie from "./components/Movie";
import MoviesList from "./components/MoviesList";
import { discoverMovies, searchMovies } from "./services/MovieService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeStar, setActiveStar] = useState(0);

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
        <Route path="/" element={<MoviesList movies={movies}/>} />
        <Route path="/" element={<Movie/>} />
      </Routes>
    </>
  );
};

export default App;
