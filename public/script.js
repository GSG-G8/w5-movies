const searchQuery = document.querySelector('.search-query');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.querySelector('.search-results');
const popularResults = document.querySelector('.popular-results');

const errorMsg = document.querySelector('.error-msg');

// popular movies
const renderMovies = arr => {
  arr.map(el => {
    const item = document.createElement("div");
    item.classList.add("item");

    const img = document.createElement("div");
    img.classList.add("img");
    const poster_path = el.poster_path;

    const urlImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const poster = document.createElement('img');
    poster.src = urlImage;
    poster.classList.add("poster");
    img.appendChild(poster);
    item.appendChild(img);

    const details = document.createElement("div");
    details.classList.add("details");
    const title = document.createElement("h2");

    title.textContent = el.title;
    details.appendChild(title);

    const originalLang = document.createElement("p");
    originalLang.textContent = `Original language: ${el.original_language}`;
    details.appendChild(originalLang);

    const overview = document.createElement("p");
    overview.classList.add("overview");
    overview.textContent = el.overview;
    details.appendChild(overview);
    item.appendChild(details);

    popularResults.appendChild(item);
  });
  console.log(arr);
};

// search movies
const searchMovies = movie => {
  const item = document.createElement("div");
  item.classList.add("item");

  const img = document.createElement("div");
    img.classList.add("img");
  const poster_path = movie.poster_path;
  const urlImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const poster = document.createElement("img");
  poster.src = urlImage;
  poster.classList.add("poster");
  img.appendChild(poster);
  item.appendChild(img);

  const details = document.createElement("div");
    details.classList.add("details");
  const title = document.createElement("h2");
  title.textContent = movie.original_title;
  details.appendChild(title);

  const originalLang = document.createElement("p");
  originalLang.textContent = `Original language: ${movie.original_language}`;
  details.appendChild(originalLang);

  const releaseDate = document.createElement("p");
  releaseDate.textContent = `Release date: ${movie.release_date}`;
  details.appendChild(releaseDate);

  const overview = document.createElement("p");
  overview.textContent = movie.overview;
  overview.classList.add("overview");
  details.appendChild(overview);
  item.appendChild(details);

  searchResults.appendChild(item);
  searchResults.replaceChild(item, searchResults.firstChild);
  searchQuery.value = '';
  console.log(movie);
};

// search movies
searchBtn.addEventListener('click', () => {
  if (searchQuery.value === null || searchQuery.value === '') {
    errorMsg.style.display = 'block';
    searchQuery.style.boxShadow = '1px 1px 10px 4px #c4414c';
  } else {
    errorMsg.style.display = 'none';
    searchQuery.style.boxShadow = '';
  fetch('/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: searchQuery.value }),
  })
    .then((result) => result.json())
    .then((result) => searchMovies(result.results[0]))
    .catch(console.error);
  }
});

// popular movies
fetch('/movies')
  .then((result) => result.json())
  .then((result) => renderMovies(result.results))
  .catch(console.error);