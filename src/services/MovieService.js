const API_KEY = "c397bd049987f53d05362ade7e2852e6"; //apikey no debería subirse
const BASE_URL = "https://api.themoviedb.org/3";

export async function discoverMovies(rating) {
  const filters = [
    "",
    "&vote_average.gte=0&vote_average.lte=1.9",
    "&vote_average.gte=2&vote_average.lte=3.9",
    "&vote_average.gte=4&vote_average.lte=5.9",
    "&vote_average.gte=6&vote_average.lte=7.9",
    "&vote_average.gte=8&vote_average.lte=10",
  ];

  let filter = filters[rating];
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=es-MX&page=1${filter}`
    );
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    return console.log(err);
  }
}

export async function searchMovies(query) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-MX&page=1`
    );
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    return console.log("Hubo un error:", err);
  }
}
