// Mobile navigation toggle
const navToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-active');
});

// Smooth scrolling for links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


// Hero section parallax effect
const heroImage = document.querySelector('.hero-image');

document.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  heroImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Client outcomes slider
let currentIndex = 0;
const clientSlider = document.querySelector('.client-slider');
const clientSlides = document.querySelectorAll('.client-slide');

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % clientSlides.length;
  clientSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + clientSlides.length) % clientSlides.length;
  clientSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

document.querySelector('.client-slider-prev').addEventListener('click', prevSlide);
document.querySelector('.client-slider-next').addEventListener('click', nextSlide);

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeOnScroll = () => {
  fadeElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight * 0.7) {
      element.classList.add('fade-in-active');
    }
  });
};

window.addEventListener('scroll', fadeOnScroll);

// Additional animations or interactive elements can be added here
