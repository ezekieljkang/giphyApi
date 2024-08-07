const img = document.querySelector('img');
const newImg = document.querySelector('#newImg');
const searchTermInput = document.querySelector('#searchTxt');

// Fetch a new image with the given search term
function fetchNewImg(searchTerm) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;
  
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      img.src = response.data.images.original.url;
    })
    .catch(error => console.error('Error fetching image:', error));
}

// Set up event listener for the button
newImg.addEventListener('click', () => {
  const searchTerm = searchTermInput.value || 'cats'; // Default to 'cats' if input is empty
  fetchNewImg(searchTerm);
});

// Fetch the initial image with the default search term
fetchNewImg('cats');
