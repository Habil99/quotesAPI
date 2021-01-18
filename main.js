const quotes = document.querySelector(".quotes");
const btn = document.getElementById("btn");
const spinner = document.getElementById("spinner");

btn.addEventListener("click", getRandomQuote);

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
    quotes.className = quotes.className.replace("", "hidden");
  }, 2200);
}

function getRandomQuote(e) {
  e.preventDefault();
  showSpinner();
  document.querySelector("h3").style.display = "none";
  fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      quotes.innerHTML = data[0].quote;
      quotes.className = quotes.className.replace("hidden", "");
    });
}

const image = document.getElementById("image");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    image.src = data.message;

    console.log(data);
  });