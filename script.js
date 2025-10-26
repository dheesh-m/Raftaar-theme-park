document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const header = document.getElementById('main-header');
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // Header scroll effect
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-solid');
            header.classList.remove('header-transparent');
        } else {
            header.classList.remove('header-solid');
            header.classList.add('header-transparent');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);

    // Fade-in on scroll
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

    showSlide(currentSlide);
});
