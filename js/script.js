// Navigation & UI Interactivity
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    // Show footer only on About page
    const footer = document.querySelector('footer');
    if (footer && !currentPath.includes('about.jsp')) {
        footer.style.display = 'none';
    }

    // Inject brand SVG logos into social links
    if (footer) {
        const icons = {
            'Twitter': '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
            'Facebook': '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
            'Instagram': '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
            'YouTube': '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
        };

        document.querySelectorAll('.social-links a').forEach(link => {
            const title = link.getAttribute('title');
            if (title && icons[title]) {
                link.innerHTML = icons[title];
            }
        });
    }

    // =====================================================
    // LOGIN/REGISTER PAGE ENHANCEMENTS
    // =====================================================
    if (currentPath.includes('login.jsp') || currentPath.includes('register.jsp')) {
        const authSection = document.querySelector('section.container');
        const authCard = authSection ? authSection.querySelector('.blog-card') : null;

        if (authSection && authCard) {
            // Center the section vertically
            authSection.style.cssText = `
                max-width: 460px;
                margin: 0 auto;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 120px 20px 60px;
            `;

            // Premium card styling
            authCard.style.cssText = `
                background: rgba(15, 15, 25, 0.85);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 28px;
                padding: 50px 45px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                position: relative;
                overflow: hidden;
                width: 100%;
                animation: fadeInScale 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
            `;

            // Gold accent line at top
            const accent = document.createElement('div');
            accent.style.cssText = `
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 3px;
                border-radius: 3px;
                background: linear-gradient(90deg, #ffcc00, #ffe066);
            `;
            authCard.prepend(accent);

            // Style the heading
            const h2 = authCard.querySelector('h2');
            if (h2) {
                h2.style.cssText = `
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #fff 40%, #ffcc00);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 8px;
                `;
            }

            // Style the "Login here" / "Register here" link below form
            const bottomLink = authCard.querySelector('p:last-child a');
            if (bottomLink) {
                bottomLink.style.cssText = `
                    color: #ffcc00;
                    text-decoration: none;
                    font-weight: 600;
                `;
            }
        }
    }

    // =====================================================
    // ADD POST: Replace genre text input with dropdown
    // =====================================================
    const genreInput = document.querySelector('input[name="genre"]');
    if (genreInput) {
        const genres = [
            '', 'Action', 'Adventure', 'Animation', 'Biography',
            'Comedy', 'Crime', 'Documentary', 'Drama', 'Family',
            'Fantasy', 'Film-Noir', 'History', 'Horror', 'Musical',
            'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Superhero',
            'Thriller', 'War', 'Western'
        ];

        const select = document.createElement('select');
        select.name = 'genre';
        select.className = genreInput.className;

        genres.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g;
            opt.textContent = g || 'Select genre';
            if (!g) opt.disabled = true;
            if (!g) opt.selected = true;
            select.appendChild(opt);
        });

        genreInput.replaceWith(select);
    }

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Link State
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) && href !== 'index.jsp') {
            link.style.color = '#ffcc00';
        } else if (href === 'index.jsp' && (currentPath.endsWith('/') || currentPath.endsWith('index.jsp'))) {
            link.style.color = '#ffcc00';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for Scroll Reveals
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Dynamic Ripple Effect for Buttons
    document.querySelectorAll('.publish-btn, .auth-btn, .read-more').forEach(button => {
        button.addEventListener('mousedown', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // =====================================================
    // HERO: Dynamic Text Cycling
    // =====================================================
    const heroP = document.querySelector('.hero-content p');
    if (heroP) {
        const phrases = [
            'Where Movies Come to Life — Explore Reviews, Deep Dives & Cinematic Magic',
            'Dive Into Cinematic Worlds — From Blockbusters to Hidden Indie Gems',
            'Reviews, Analysis & Beyond — Your Ultimate Destination for Film',
            'Your Next Favorite Film Awaits — Discover Stories That Inspire & Move You',
            'Stories That Move You — Curated Insights From the World of Cinema'
        ];
        let phraseIndex = 0;

        // Wrap text in a span for animation control
        heroP.innerHTML = '<span class="hero-typed">' + heroP.textContent + '</span>';
        const typedEl = heroP.querySelector('.hero-typed');

        setInterval(() => {
            // Fade out
            typedEl.classList.add('fade-out');

            setTimeout(() => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typedEl.textContent = phrases[phraseIndex];
                typedEl.classList.remove('fade-out');
            }, 500); // swap text halfway through
        }, 3000);
    }

    // =====================================================
    // HERO: Inject Login & Signup Buttons
    // =====================================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const btnWrap = document.createElement('div');
        btnWrap.className = 'hero-buttons';
        btnWrap.innerHTML = `
            <a href="login.jsp" class="hero-btn hero-btn-login">Log In</a>
            <a href="register.jsp" class="hero-btn hero-btn-signup">Sign Up</a>
        `;
        heroContent.appendChild(btnWrap);
    }

    // =====================================================
    // NAVBAR: Inject Login & Signup Buttons
    // =====================================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const navBtns = document.createElement('div');
        navBtns.className = 'nav-auth-buttons';
        navBtns.innerHTML = `
            <a href="login.jsp" class="nav-auth-btn nav-login">Log In</a>
            <a href="register.jsp" class="nav-auth-btn nav-signup">Sign Up</a>
        `;
        navbar.appendChild(navBtns);
    }
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.parentElement.classList.add('error');
            isValid = false;
        } else {
            input.parentElement.classList.remove('error');
        }
    });

    if (!isValid) {
        // Simple shake animation for the card
        const card = form.closest('.add-blog-card, .auth-card');
        if (card) {
            card.style.animation = 'none';
            card.offsetHeight; // trigger reflow
            card.style.animation = 'shake 0.5s ease-in-out';
        }
    }

    return isValid;
}

// Global Shake Animation (added via JS to avoid extra CSS file if possible, but better in CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: ripple 0.6s linear;
        width: 0;
        height: 0;
    }
    @keyframes ripple {
        from { width: 0; height: 0; opacity: 1; }
        to { width: 500px; height: 500px; opacity: 0; }
    }
`;
document.head.appendChild(style);
