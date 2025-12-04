// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Close mobile menu
        navMenu.classList.remove('active');
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => observer.observe(card));

// Observe product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => observer.observe(card));

// Observe value cards
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach(card => observer.observe(card));

// Observe facility cards
const facilityCards = document.querySelectorAll('.facility-card');
facilityCards.forEach(card => observer.observe(card));

// Observe about section
const aboutLeft = document.querySelector('.about-left');
const aboutRight = document.querySelector('.about-right');
if (aboutLeft) observer.observe(aboutLeft);
if (aboutRight) observer.observe(aboutRight);

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Success message (in real app, this would send to server)
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for all anchor links
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});