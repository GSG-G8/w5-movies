const searchQuery = document.querySelector(".search-query");
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener("click", (e) => {
    console.log(e);
  fetch("/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: searchQuery.value })
  })
    .then(result => result.json())
    .then(console.log)
    .catch(console.error);
});
