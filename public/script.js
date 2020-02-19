const searchQuery = document.querySelector('.search-query');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.querySelector('.search-results');
const popularResults = document.querySelector('.popular-results');

// popular movies
const renderMovies = (arr) => {
  arr.map((el) => {
    const item = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = el.title;
    item.appendChild(title);

    popularResults.appendChild(item);
  });
  console.log(arr);
};

// search movies
const searchMovies = (arr) => {
  arr.map((el) => {
    const item = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = el.original_title;
    item.appendChild(title);

    searchResults.appendChild(item);
  });
  console.log(arr);
};

// search movies
searchBtn.addEventListener('click', () => {
  searchQuery.textContent = '';
  fetch('/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: searchQuery.value }),
  })
    .then((result) => result.json())
    .then((result) => searchMovies(result.results))
    .catch(console.error);
});

// popular movies
fetch('/movies')
  .then((result) => result.json())
  .then((result) => renderMovies(result.results))
  .catch(console.error);
