let selectedRating = 0;

function rate(rating) {
  selectedRating = rating;
  console.log(`Selected rating: ${selectedRating}`);
}

function submitRating() {
  if (selectedRating > 0) {
    document.getElementById('rating-page').style.display = 'none';
    document.getElementById('thank-you-page').style.display = 'block';

    document.getElementById('selected-rating').textContent = selectedRating;
  } else {
    alert('Please select a rating before submitting!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn1',);

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn2');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn3');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn4');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn5');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
  });
});