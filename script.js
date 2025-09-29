const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contactForm');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
});

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});