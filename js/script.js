// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = '#e94560';
            link.style.fontWeight = '700';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const title = form.querySelector('input[name="title"]').value;
    const content = form.querySelector('textarea[name="content"]').value;
    
    if (!title || !content) {
        alert('Please fill in all required fields');
        return false;
    }
    
    return true;
}

// Dynamic content loading simulation
function loadMoreContent() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    // Simulate loading more content
    const newCard = document.createElement('div');
    newCard.className = 'blog-card card-enter';
    newCard.innerHTML = `
        <div class="card-image">
            <img src="images/placeholder.jpg" alt="Loading...">
        </div>
        <div class="card-content">
            <h3>New Movie Review</h3>
            <div class="card-meta">
                <span class="category category-badge">Reviews</span>
                <span class="author">Loading...</span>
            </div>
            <p>Loading content...</p>
            <a href="#" class="read-more btn-hover">Read More</a>
        </div>
    `;
    
    blogGrid.appendChild(newCard);
    
    // Simulate content load
    setTimeout(() => {
        newCard.querySelector('h3').textContent = 'Inception - A Mind-Bending Masterpiece';
        newCard.querySelector('p').textContent = 'Christopher Nolan\'s Inception is a cinematic marvel that pushes the boundaries of storytelling and visual effects...';
        newCard.querySelector('.author').textContent = 'John Doe';
    }, 1000);
}

// Initialize animations on scroll
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealAnimation = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealAnimation);
    revealAnimation(); // Run once on load
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Add smooth scroll behavior to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});