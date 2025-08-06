const movies = [
  { title: "Inception", poster: "https://m.media-amazon.com/images/I/51x49Um1f-L.jpg" },
  { title: "Interstellar", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg" },
  { title: "The Dark Knight", poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg" }
];

const movieList = document.getElementById("movieList");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.classList.add("movie");
  div.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
  `;
  movieList.appendChild(div);
});
