document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const header = document.getElementById('main-header');
    const fadeElements = document.querySelectorAll('.fade-in-element');

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
    handleHeaderScroll();

    // Fade in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));

    // KART CAROUSEL
    const kartSlides = document.querySelectorAll('.kart-slide');
    const prevKartButton = document.getElementById('prev-kart');
    const nextKartButton = document.getElementById('next-kart');
    let currentKartSlide = 0;

    const showKartSlide = index => {
        kartSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };
    // Check if buttons exist before adding listeners 
    if (nextKartButton && prevKartButton) {
        nextKartButton.addEventListener('click', () => { 
            currentKartSlide = (currentKartSlide + 1) % kartSlides.length;
            showKartSlide(currentKartSlide);
        });
        prevKartButton.addEventListener('click', () => { 
            currentKartSlide = (currentKartSlide - 1 + kartSlides.length) % kartSlides.length;
            showKartSlide(currentKartSlide);
        });
    }
    showKartSlide(currentKartSlide);

    // --- TRACK CAROUSEL (3D Horizontal Look) ---
    const trackSlides = document.querySelectorAll('.track-slide');
    const trackInner = document.getElementById('track-carousel-inner');
    const prevTrackButton = document.getElementById('prev-track');
    const nextTrackButton = document.getElementById('next-track');

    // We have 3 real slides (0, 1, 2) and 1 duplicate (3). The count is based on real slides.
    const realSlidesCount = trackSlides.length - 1; 
    let currentTrackSlide = 0; // Index of the visually centered slide

    // Find the correct translation value to position the slides
    const getTranslateXValue = (index) => {
        // Desktop (>= 768px): 3 slides visible, each 1/3 width
        const slideWidthPercentage = window.innerWidth >= 768 ? 33.333 : 100;
        
        // Initial offset to center the first slide (index 0). 
        // We shift the container left by one-third of the slide width on desktop.
        const initialOffset = window.innerWidth >= 768 ? 33.333 : 0; 

        // Total translation: (index * slide width) - initial offset
        const totalTranslate = (index * slideWidthPercentage) - initialOffset;

        return `-${totalTranslate}%`;
    };

    const updateTrackCarousel = () => {
        // 1. Apply transform to the inner container for the sliding effect
        trackInner.style.transform = `translateX(${getTranslateXValue(currentTrackSlide)})`;

        // 2. Update 'active' class for styling (center item larger/higher opacity)
        trackSlides.forEach((slide, i) => {
            // Apply 'active' only to the center slide (0, 1, or 2)
            slide.classList.toggle('active', i === currentTrackSlide);
        });
    };

    // Navigation handlers
    if (nextTrackButton && prevTrackButton) {
        nextTrackButton.addEventListener('click', () => { 
            // Cycle index: 0 -> 1 -> 2 -> 0
            currentTrackSlide = (currentTrackSlide + 1) % realSlidesCount;
            updateTrackCarousel();
        });
        prevTrackButton.addEventListener('click', () => { 
            // Cycle index: 0 -> 2 -> 1 -> 0
            currentTrackSlide = (currentTrackSlide - 1 + realSlidesCount) % realSlidesCount;
            updateTrackCarousel();
        });
    }

    // Re-calculate on resize to handle layout change (1 slide vs 3 slides visible)
    window.addEventListener('resize', updateTrackCarousel);

    // Initialize the carousel
    updateTrackCarousel();
});