// navbar scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

// testimonials
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel('#cardCarousel', {
        interval: false, // Disable automatic sliding
        ride: false // Ensure the carousel doesn't auto-start
    });
});






