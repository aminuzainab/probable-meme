document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Set the rating value
            ratingValue.textContent = index + 1;

            // Reset the star colors
            stars.forEach(s => s.classList.remove('active'));

            // Highlight the selected stars
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });
    });
});
