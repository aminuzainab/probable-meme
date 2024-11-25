let selectedRating = 5;

function rate(rating) {
  selectedRating = rating;
  console.log(`Selected rating: ${selectedRating}`);
}

function submitRating() {
  if (selectedRating <= 5) {
    document.getElementById('rating-page').style.display = 'none';
    document.getElementById('thank-you-page').style.display = 'block';

    document.getElementById('selected-rating').textContent = selectedRating;
  } else {
    alert('Please select a rating before submitting!');
  }
}
