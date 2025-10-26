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
        if (!kartSlides || kartSlides.length === 0) return;
        kartSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };
    // Add arrow icons to the buttons if present (simple unicode arrows)
    if (prevKartButton) prevKartButton.innerHTML = prevKartButton.innerHTML.trim() || '◀';
    if (nextKartButton) nextKartButton.innerHTML = nextKartButton.innerHTML.trim() || '▶';

    // Check if buttons exist before adding listeners and ensure we have slides
    if (kartSlides.length > 0 && (nextKartButton || prevKartButton)) {
        if (nextKartButton) {
            nextKartButton.addEventListener('click', () => {
                currentKartSlide = (currentKartSlide + 1) % kartSlides.length;
                showKartSlide(currentKartSlide);
            });
        }
        if (prevKartButton) {
            prevKartButton.addEventListener('click', () => {
                currentKartSlide = (currentKartSlide - 1 + kartSlides.length) % kartSlides.length;
                showKartSlide(currentKartSlide);
            });
        }

        // Auto-loop kart slides one by one every 3.5s
        // Robust kart autoplay + ensure prev/next exist and work
        let autoKartTimer = null;
        const KART_INTERVAL = 3500;

        // find a sensible container to attach nav buttons (prefer a .kart-carousel wrapper)
        const kartContainer = document.querySelector('.kart-carousel') || (kartSlides[0] && kartSlides[0].parentElement) || document.body;

        let prevBtn = prevKartButton;
        let nextBtn = nextKartButton;

        const makeBtn = (id, cls, aria, symbol) => {
            const b = document.createElement('button');
            b.id = id;
            b.className = cls;
            b.type = 'button';
            b.setAttribute('aria-label', aria);
            b.innerHTML = symbol;
            return b;
        };

        if (!prevBtn) {
            prevBtn = makeBtn('prev-kart', 'kart-nav prev-kart', 'Previous kart slide', '◀');
            kartContainer.appendChild(prevBtn);
        }
        if (!nextBtn) {
            nextBtn = makeBtn('next-kart', 'kart-nav next-kart', 'Next kart slide', '▶');
            kartContainer.appendChild(nextBtn);
        }

        // attach click handlers (safe if handlers already exist)
        const onNextKart = () => {
            currentKartSlide = (currentKartSlide + 1) % kartSlides.length;
            showKartSlide(currentKartSlide);
            startAutoKart();
        };
        const onPrevKart = () => {
            currentKartSlide = (currentKartSlide - 1 + kartSlides.length) % kartSlides.length;
            showKartSlide(currentKartSlide);
            startAutoKart();
        };

        // remove duplicate listeners (best-effort)
        prevBtn.removeEventListener && prevBtn.removeEventListener('click', onPrevKart);
        nextBtn.removeEventListener && nextBtn.removeEventListener('click', onNextKart);
        prevBtn.addEventListener('click', onPrevKart);
        nextBtn.addEventListener('click', onNextKart);

        // stop/start auto-loop helpers
        function stopAutoKart() {
            if (autoKartTimer) {
            clearInterval(autoKartTimer);
            autoKartTimer = null;
            }
        }

        // Ensure prev/next buttons exist for the TRACK carousel (create if missing)
        (function ensureTrackNavButtonsAndOverlays() {
            const trackContainer = document.querySelector('.track-carousel')
            || document.getElementById('track-carousel-inner')?.parentElement
            || document.body;

            let prevT = document.getElementById('prev-track');
            let nextT = document.getElementById('next-track');

            const makeTrackBtn = (id, cls, aria, symbol) => {
            const b = document.createElement('button');
            b.id = id;
            b.className = cls;
            b.type = 'button';
            b.setAttribute('aria-label', aria);
            b.innerHTML = symbol;
            return b;
            };

            if (!prevT) {
            prevT = makeTrackBtn('prev-track', 'track-nav prev-track', 'Previous track', '◀');
            trackContainer.appendChild(prevT);
            }
            if (!nextT) {
            nextT = makeTrackBtn('next-track', 'track-nav next-track', 'Next track', '▶');
            trackContainer.appendChild(nextT);
            }

            // Add overlay prev/next buttons to each track slide so images themselves have controls
            const trackSlidesForOverlay = Array.from(document.querySelectorAll('.track-slide'));
            trackSlidesForOverlay.forEach((slide) => {
            if (slide.querySelector('.track-overlay-nav')) return; // avoid duplicates

            const container = document.createElement('div');
            container.className = 'track-overlay-nav';
            container.style.position = 'absolute';
            container.style.inset = '0';
            container.style.pointerEvents = 'none';

            const makeOverlayBtn = (cls, aria, symbol) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.className = cls;
                b.setAttribute('aria-label', aria);
                b.innerHTML = symbol;
                b.style.pointerEvents = 'auto';
                b.style.position = 'absolute';
                b.style.top = '50%';
                b.style.transform = 'translateY(-50%)';
                b.style.background = 'transparent';
                b.style.border = 'none';
                b.style.fontSize = '1.6rem';
                b.style.cursor = 'pointer';
                b.style.color = 'inherit';
                b.style.padding = '8px';
                b.style.zIndex = '5';
                return b;
            };

            const prevOverlay = makeOverlayBtn('track-slide-prev', 'Previous track', '◀');
            prevOverlay.style.left = '8px';
            const nextOverlay = makeOverlayBtn('track-slide-next', 'Next track', '▶');
            nextOverlay.style.right = '8px';

            prevOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                const btn = document.getElementById('prev-track');
                if (btn) btn.click();
            });
            nextOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                const btn = document.getElementById('next-track');
                if (btn) btn.click();
            });

            container.appendChild(prevOverlay);
            container.appendChild(nextOverlay);

            if (getComputedStyle(slide).position === 'static') {
                slide.style.position = 'relative';
            }
            slide.appendChild(container);
            });
        })();

        // Add overlay prev/next buttons to each slide so images themselves have controls
        const attachOverlayNav = () => {
            kartSlides.forEach((slide) => {
            if (slide.querySelector('.kart-overlay-nav')) return; // avoid duplicates

            const container = document.createElement('div');
            container.className = 'kart-overlay-nav';
            // allow clicks only on buttons, not the whole overlay
            container.style.position = 'absolute';
            container.style.inset = '0';
            container.style.pointerEvents = 'none';

            const makeOverlayBtn = (cls, aria, symbol) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.className = cls;
                b.setAttribute('aria-label', aria);
                b.innerHTML = symbol;
                b.style.pointerEvents = 'auto';
                b.style.position = 'absolute';
                b.style.top = '50%';
                b.style.transform = 'translateY(-50%)';
                b.style.background = 'transparent';
                b.style.border = 'none';
                b.style.fontSize = '1.6rem';
                b.style.cursor = 'pointer';
                b.style.color = 'inherit';
                b.style.padding = '8px';
                b.style.zIndex = '5';
                return b;
            };

            const prevOverlay = makeOverlayBtn('kart-slide-prev', 'Previous slide', '◀');
            prevOverlay.style.left = '8px';
            const nextOverlay = makeOverlayBtn('kart-slide-next', 'Next slide', '▶');
            nextOverlay.style.right = '8px';

            prevOverlay.addEventListener('click', (e) => { e.stopPropagation(); onPrevKart(); });
            nextOverlay.addEventListener('click', (e) => { e.stopPropagation(); onNextKart(); });

            container.appendChild(prevOverlay);
            container.appendChild(nextOverlay);

            // ensure slide can contain absolutely positioned overlay
            if (getComputedStyle(slide).position === 'static') {
                slide.style.position = 'relative';
            }
            slide.appendChild(container);
            });
        };

        // Attach overlay controls immediately
        attachOverlayNav();

        // Keyboard navigation: left/right when focus is inside kart container or any slide
        const onKeyDownKart = (e) => {
            if (e.key === 'ArrowLeft') {
            onPrevKart();
            } else if (e.key === 'ArrowRight') {
            onNextKart();
            }
        };
        // Only listen when user interacts with the carousel (enter/leave/focus)
        kartContainer.addEventListener('focusin', () => window.addEventListener('keydown', onKeyDownKart));
        kartContainer.addEventListener('focusout', () => window.removeEventListener('keydown', onKeyDownKart));
        kartContainer.addEventListener('mouseenter', () => window.addEventListener('keydown', onKeyDownKart));
        kartContainer.addEventListener('mouseleave', () => window.removeEventListener('keydown', onKeyDownKart));

        // Touch swipe support for mobile devices
        let touchStartX = 0;
        kartContainer.addEventListener('touchstart', (e) => {
            if (!e.changedTouches || !e.changedTouches[0]) return;
            touchStartX = e.changedTouches[0].clientX;
            stopAutoKart();
        }, { passive: true });

        kartContainer.addEventListener('touchend', (e) => {
            if (!e.changedTouches || !e.changedTouches[0]) return;
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            const THRESHOLD = 40; // px
            if (Math.abs(diff) > THRESHOLD) {
            if (diff > 0) onNextKart(); else onPrevKart();
            }
            startAutoKart();
        }, { passive: true });
        function startAutoKart() {
            stopAutoKart();
            if (kartSlides.length === 0) return;
            autoKartTimer = setInterval(() => {
            currentKartSlide = (currentKartSlide + 1) % kartSlides.length;
            showKartSlide(currentKartSlide);
            }, KART_INTERVAL);
        }

        // pause while the user hovers or focuses the carousel
        kartContainer.addEventListener('mouseenter', stopAutoKart);
        kartContainer.addEventListener('mouseleave', startAutoKart);
        kartContainer.addEventListener('focusin', stopAutoKart);
        kartContainer.addEventListener('focusout', startAutoKart);

        // start autoplay
        startAutoKart();
    }
    showKartSlide(currentKartSlide);

    // --- TRACK CAROUSEL (rewritten for reliable clicks, arrows and smooth looping) ---
    const trackSlides = Array.from(document.querySelectorAll('.track-slide'));
    const trackInner = document.getElementById('track-carousel-inner');
    const prevTrackButton = document.getElementById('prev-track');
    const nextTrackButton = document.getElementById('next-track');

    let currentTrackSlide = 0;
    let slideWidth = 0;
    let autoTrackTimer = null;
    const AUTO_INTERVAL = 4000;

    // Ensure buttons show arrows (use simple unicode so the red circular button has content)
    if (prevTrackButton) prevTrackButton.innerHTML = prevTrackButton.innerHTML.trim() || '◀';
    if (nextTrackButton) nextTrackButton.innerHTML = nextTrackButton.innerHTML.trim() || '▶';

    const calcSlideWidth = () => {
        if (!trackSlides.length) {
            slideWidth = 0;
            return;
        }
        // Use the real rendered width of the first slide so pixel translation is accurate
        const rect = trackSlides[0].getBoundingClientRect();
        slideWidth = rect.width;
    };

    const updateTrackCarousel = (skipTransition = false) => {
        if (!trackInner || !trackSlides.length) return;

        // clamp currentTrackSlide into valid range
        currentTrackSlide = ((currentTrackSlide % trackSlides.length) + trackSlides.length) % trackSlides.length;

        // apply smooth transition
        if (skipTransition) {
            trackInner.style.transition = 'none';
        } else {
            trackInner.style.transition = 'transform 0.6s cubic-bezier(.22,.8,.3,1)';
        }

        // translate by pixel width for reliable single-step movement
        const offsetX = currentTrackSlide * slideWidth;
        trackInner.style.transform = `translateX(-${offsetX}px)`;

        // Update 'active' class for styling (center item larger/higher opacity)
        trackSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentTrackSlide);
        });
    };

    const stopAutoLoop = () => {
        if (autoTrackTimer) {
            clearInterval(autoTrackTimer);
            autoTrackTimer = null;
        }
    };

    const startAutoLoop = () => {
        stopAutoLoop();
        if (trackSlides.length === 0) return;
        autoTrackTimer = setInterval(() => {
            currentTrackSlide = (currentTrackSlide + 1) % trackSlides.length;
            updateTrackCarousel();
        }, AUTO_INTERVAL);
    };

    const goNextTrack = () => {
        if (!trackSlides.length) return;
        currentTrackSlide = (currentTrackSlide + 1) % trackSlides.length;
        updateTrackCarousel();
        // restart auto loop so clicking doesn't fight with interval timing
        startAutoLoop();
    };

    const goPrevTrack = () => {
        if (!trackSlides.length) return;
        currentTrackSlide = (currentTrackSlide - 1 + trackSlides.length) % trackSlides.length;
        updateTrackCarousel();
        startAutoLoop();
    };

    // Attach click handlers (safe even if buttons are missing)
    if (nextTrackButton) nextTrackButton.addEventListener('click', goNextTrack);
    if (prevTrackButton) prevTrackButton.addEventListener('click', goPrevTrack);

    // Re-calculate widths on resize and update carousel without transition to avoid jumpiness
    window.addEventListener('resize', () => {
        calcSlideWidth();
        updateTrackCarousel(true);
    });

    // Initialize sizes and start carousel
    calcSlideWidth();
    updateTrackCarousel(true); // initial without transition
    startAutoLoop();
});