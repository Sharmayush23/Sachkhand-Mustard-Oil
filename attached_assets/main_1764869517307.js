// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.mobile-menu a');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Reveal Animation (Simple Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // observer.unobserve(entry.target); // Keep observing for re-entry effects if desired
        }
    });
}, observerOptions);

document.querySelectorAll('.section .content, .product-card, .text-content, .image-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Add visible class styles dynamically or rely on CSS
// Here we inject a style for the .visible class to ensure it works without modifying style.css again immediately
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
