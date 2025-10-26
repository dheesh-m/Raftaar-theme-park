document.addEventListener('DOMContentLoaded', () => {
    // Initializes Lucide icons (i.e., the chevron, search, and map-pin icons)
    lucide.createIcons();

    const header = document.getElementById('main-header');
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // Header scroll effect
    const handleHeaderScroll = () => {
        // Apply 'header-solid' class when scrolled past 50px
        if (window.scrollY > 50) {
            header.classList.add('header-solid');
            header.classList.remove('header-transparent');
        } else {
            // Apply 'header-transparent' (the default solid color) when at the top
            header.classList.remove('header-solid');
            header.classList.add('header-transparent');
        }
    };
    
    window.addEventListener('scroll', handleHeaderScroll);
    // Call on load to set the initial, solid state immediately
    handleHeaderScroll(); 

    // Fade-in on scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));

    // Kart Carousel
    const slides = document.querySelectorAll('.kart-slide');
    const prevButton = document.getElementById('prev-kart');
    const nextButton = document.getElementById('next-kart');
    let currentSlide = 0;

    const showSlide = index => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    };

    nextButton.addEventListener('click', () => { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); });
    prevButton.addEventListener('click', () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); });

    // Initialize the first slide
    showSlide(currentSlide);
});