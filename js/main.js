/**
 * LepikköRanch - Main JavaScript
 * Handles navigation, smooth scrolling, animations, and interactivity
 */

// ===== Smooth Scrolling for Navigation Links =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"], .scroll-indicator a, .footer-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle links that start with #
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    const navMenu = document.getElementById('navMenu');
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        const navToggle = document.getElementById('navToggle');
                        if (navToggle) {
                            navToggle.classList.remove('active');
                        }
                    }
                    
                    // Calculate offset for fixed navbar
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== Navbar Scroll Behavior =====
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add 'scrolled' class when scrolled more than 50px
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== Mobile Menu Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // ===== Intersection Observer for Fade-in Animations =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===== Lazy Load Google Maps =====
    const mapContainer = document.querySelector('.map-container iframe');
    
    if (mapContainer) {
        const mapObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Map iframe is already in HTML, just ensure it loads
                    // This is more for future optimization if needed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        mapObserver.observe(mapContainer);
    }
    
    // ===== Active Navigation Link Highlighting =====
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
        
        // Special case for hero section at top
        if (scrollY < 100) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const heroLink = document.querySelector('.nav-link[href="#hero"]');
            if (heroLink) {
                heroLink.classList.add('active');
            }
        }
    });
    
    // ===== Image Error Handling =====
    const images = document.querySelectorAll('img[onerror]');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback already handled in HTML onerror attribute
            // This is for additional logging if needed
            console.log('Image failed to load:', img.src);
        });
    });
    
    // ===== Prevent FOUC (Flash of Unstyled Content) =====
    document.body.style.visibility = 'visible';
    
    // ===== Console Welcome Message =====
    console.log('%c🤠 Tervetuloa LepikköRanchille! ', 
        'font-size: 20px; font-weight: bold; color: #D2691E; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
    console.log('%cLännenratsastusta luonnon helmassa', 
        'font-size: 14px; color: #8D6E63; font-style: italic;');
    
    // ===== Performance Monitoring (Development) =====
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                           window.performance.timing.navigationStart;
            console.log(`⚡ Sivu ladattu ${loadTime}ms`);
        });
    }
});

// ===== Scroll to Top on Page Load =====
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// ===== External Links Open in New Tab =====
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([target="_blank"])');
    externalLinks.forEach(link => {
        // Check if link is external (not same domain)
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===== Add smooth reveal animation to cards on scroll =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for cards
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});

// ===== Accessibility: Keyboard Navigation Enhancement =====
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
                navToggle.focus();
            }
        }
    }
});

// ===== Add focus visible styles for keyboard navigation =====
document.addEventListener('DOMContentLoaded', function() {
    // Detect if user is using keyboard
    document.body.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.body.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
});

// ===== Parallax effect for hero background (optional enhancement) =====
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.backgroundPositionY = `${parallax}px`;
    }
});

// ===== Log site version (for debugging) =====
console.log('LepikköRanch v1.0.0 | Built with ❤️ for Western Riding');
