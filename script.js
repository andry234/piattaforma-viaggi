// Countdown Logic
const countdown = () => {
    // Set drop date to next Tuesday, 12:00 PM
    const now = new Date();
    const target = new Date();
    target.setDate(now.getDate() + ((2 + 7 - now.getDay()) % 7)); // Next Tuesday
    target.setHours(12, 0, 0, 0);

    // If it's already past Tuesday 12 PM, set for next week
    if (now > target) {
        target.setDate(target.getDate() + 7);
    }

    const updateTimer = () => {
        const currentTime = new Date().getTime();
        const difference = target.getTime() - currentTime;

        if (difference < 0) {
            document.getElementById('days').innerText = "00";
            document.getElementById('hours').innerText = "00";
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            return;
        }

        const daysEl = document.getElementById('days');
        if (!daysEl) return; // Stop if countdown elements don't exist

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysEl.innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
};

// Modal Logic
const initModal = () => {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return; // Check if modal exists on this page
    
    const openBtns = document.querySelectorAll('.open-checkout');
    const closeBtn = modal.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
};

// Burger Menu Logic
const initMenu = () => {
    const burgerBtn = document.getElementById('burger-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = document.querySelectorAll('.menu-item');

    const openMenu = () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (burgerBtn && fullscreenMenu) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (fullscreenMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', closeMenu);
        }
        
        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (fullscreenMenu.classList.contains('active') && !fullscreenMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                closeMenu();
            }
        });
    }
};

// Activity Details Logic
const initActivityDetails = () => {
    const activityModal = document.getElementById('activity-modal');
    if (!activityModal) return; // Check if activity modal exists on this page
    
    const cards = document.querySelectorAll('.destination-card');
    const closeActivityBtn = activityModal.querySelector('.close-activity');
    const btnBookActivity = document.getElementById('btn-book-activity');
    const checkoutModal = document.getElementById('checkout-modal');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Se clicco sul bottone prenota della card, evito di aprire i dettagli
            if (e.target.closest('.open-checkout')) return;

            // Popola i dati
            document.getElementById('activity-cover').style.backgroundImage = `url('${card.dataset.image}')`;
            document.getElementById('activity-title').innerText = card.dataset.title;
            document.getElementById('activity-location').innerText = card.dataset.location;
            document.getElementById('activity-desc').innerText = card.dataset.desc;
            document.getElementById('activity-price').innerText = card.dataset.price;
            
            const originalTags = card.querySelector('.tags');
            document.getElementById('activity-tags').innerHTML = originalTags ? originalTags.innerHTML : '';

            // Aggiorna anche il modal di checkout
            document.getElementById('checkout-item-title').innerText = card.dataset.title;
            document.getElementById('checkout-item-price').innerText = card.dataset.price;
            
            // Calcolo totale finto per la demo (es. togliendo € per sommare)
            const priceVal = parseInt(card.dataset.price.replace('€', ''));
            const total = priceVal + 10;
            document.getElementById('checkout-total').innerText = '€' + total + '.00';

            activityModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeActivity = () => {
        activityModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeActivityBtn) closeActivityBtn.addEventListener('click', closeActivity);
    
    if (activityModal) {
        activityModal.addEventListener('click', (e) => {
            if (e.target === activityModal) {
                closeActivity();
            }
        });
    }

    if (btnBookActivity) {
        btnBookActivity.addEventListener('click', () => {
            closeActivity();
            checkoutModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
};

// Scroll Animations
const initScrollAnimations = () => {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-blur, .reveal-scale');
    
    if (reveals.length === 0) return;

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible', 'is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    countdown();
    initModal();
    initMenu();
    initActivityDetails();
    initScrollAnimations();
});


/* Custom Cursor Logic */
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if pointer is fine (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Re-attach hover logic on DOM changes or simply attach to existing elements
        const attachCursorHover = () => {
            const hoverElements = document.querySelectorAll('a, button, .destination-card, .lang-btn');
            hoverElements.forEach(el => {
                // remove existing to avoid duplicates if called multiple times
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
                
                el.addEventListener('mouseenter', addHover);
                el.addEventListener('mouseleave', removeHover);
            });
        };
        
        const addHover = () => cursor.classList.add('hover');
        const removeHover = () => cursor.classList.remove('hover');

        attachCursorHover();
        
        // simple observer to attach to dynamically added elements (like modals)
        const observer = new MutationObserver(() => attachCursorHover());
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /* FOMO Ticker Logic */
    // Only run on pages that have cards
    if (document.querySelector('.destination-card')) {
        const fomoHTML = `
            <div id="fomo-ticker" class="fomo-ticker">
                <div class="fomo-icon">🔥</div>
                <div class="fomo-text" id="fomo-text-container">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', fomoHTML);

        const fomoTicker = document.getElementById('fomo-ticker');
        const fomoTextContainer = document.getElementById('fomo-text-container');

        const names = ['Marco', 'Giulia', 'Alex', 'Sofia', 'Leo', 'Martina', 'Max', 'Chiara'];
        const drops = ['The Urban Jungle', 'The Digital Detox', 'The Secret Rave'];

        const fomoTranslations = {
            "it": "<span>{name}</span> ha appena prenotato <strong>{drop}</strong>",
            "en": "<span>{name}</span> just booked <strong>{drop}</strong>"
        };

        function showFomo() {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomDrop = drops[Math.floor(Math.random() * drops.length)];
            
            let currentLang = localStorage.getItem('wkndr_lang') || 'it';
            let template = fomoTranslations[currentLang] || fomoTranslations['it'];
            
            fomoTextContainer.innerHTML = template.replace('{name}', randomName).replace('{drop}', randomDrop);

            fomoTicker.classList.add('visible');
            
            setTimeout(() => {
                fomoTicker.classList.remove('visible');
            }, 5000);
        }

        setTimeout(() => {
            showFomo();
            setInterval(() => {
                showFomo();
            }, Math.floor(Math.random() * 15000) + 15000); // 15-30 seconds
        }, 8000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    /* Waitlist Modal Logic */
    const waitlistModal = document.getElementById('waitlist-modal');
    const openWaitlistBtns = document.querySelectorAll('.open-waitlist');
    const closeWaitlistBtns = document.querySelectorAll('.close-waitlist');

    if (waitlistModal) {
        openWaitlistBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                waitlistModal.classList.add('active');
            });
        });

        closeWaitlistBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                waitlistModal.classList.remove('active');
            });
        });

        waitlistModal.addEventListener('click', (e) => {
            if (e.target === waitlistModal) {
                waitlistModal.classList.remove('active');
            }
        });
    }
});

// Lenis Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
});

// 3D Tilt Effect for Cards
document.addEventListener('DOMContentLoaded', () => {
    // Only apply on fine pointer (desktop)
    if (window.matchMedia("(pointer: fine)").matches) {
        const cards = document.querySelectorAll('.destination-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element.
                const y = e.clientY - rect.top;  // y position within the element.
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                card.style.transition = 'transform 0.1s ease-out';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        });
    }
});
