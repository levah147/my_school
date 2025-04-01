// Main JavaScript

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
const backToTop = document.querySelector('.back-to-top');
const currentYearElement = document.getElementById('currentYear');

// Slider Elements
const slides = document.querySelectorAll('.slide');
const sliderIndicators = document.querySelectorAll('.slider-indicators .indicator');
const prevSlideBtn = document.querySelector('.slider-nav.prev');
const nextSlideBtn = document.querySelector('.slider-nav.next');

// Testimonial Elements
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicators .indicator');
const prevTestimonialBtn = document.querySelector('.testimonial-nav.prev');
const nextTestimonialBtn = document.querySelector('.testimonial-nav.next');

// Video Elements
const videoPlayBtn = document.getElementById('videoPlayBtn');
const videoContainer = document.getElementById('videoContainer');

// Set current year in footer
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle
if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
}

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
        if (backToTop) {
            backToTop.classList.add('active');
        }
    } else {
        header.classList.remove('sticky');
        if (backToTop) {
            backToTop.classList.remove('active');
        }
    }
});

// Hero Slider
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all indicators
    sliderIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show the selected slide and activate indicator
    slides[index].classList.add('active');
    sliderIndicators[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
}

// Initialize slider
if (slides.length > 0 && sliderIndicators.length > 0) {
    // Add click event to indicators
    sliderIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Add click event to prev button
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            let index = currentSlide - 1;
            if (index < 0) {
                index = slides.length - 1;
            }
            showSlide(index);
        });
    }
    
    // Add click event to next button
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            let index = currentSlide + 1;
            if (index >= slides.length) {
                index = 0;
            }
            showSlide(index);
        });
    }
    
    // Auto slide
    setInterval(() => {
        let index = currentSlide + 1;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    }, 5000);
}

// Testimonial Slider
let currentTestimonial = 0;

function showTestimonial(index) {
    // Hide all testimonials
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all indicators
    testimonialIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show the selected testimonial and activate indicator
    testimonialSlides[index].classList.add('active');
    testimonialIndicators[index].classList.add('active');
    
    // Update current testimonial index
    currentTestimonial = index;
}

// Initialize testimonial slider
if (testimonialSlides.length > 0 && testimonialIndicators.length > 0) {
    // Add click event to indicators
    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Add click event to prev button
    if (prevTestimonialBtn) {
        prevTestimonialBtn.addEventListener('click', () => {
            let index = currentTestimonial - 1;
            if (index < 0) {
                index = testimonialSlides.length - 1;
            }
            showTestimonial(index);
        });
    }
    
    // Add click event to next button
    if (nextTestimonialBtn) {
        nextTestimonialBtn.addEventListener('click', () => {
            let index = currentTestimonial + 1;
            if (index >= testimonialSlides.length) {
                index = 0;
            }
            showTestimonial(index);
        });
    }
    
    // Auto slide
    setInterval(() => {
        let index = currentTestimonial + 1;
        if (index >= testimonialSlides.length) {
            index = 0;
        }
        showTestimonial(index);
    }, 7000);
}

// Video Play Button
if (videoPlayBtn && videoContainer) {
    videoPlayBtn.addEventListener('click', () => {
        // Hide play button
        videoPlayBtn.style.display = 'none';
        
        // Show video container
        videoContainer.style.display = 'block';
        
        // Create iframe for video
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'about:blank'); // Replace with actual video URL
        iframe.setAttribute('title', 'School Video');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        
        // Append iframe to container
        videoContainer.appendChild(iframe);
    });
}

// Back to Top Button
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add animation classes when elements are in viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 50) {
            element.classList.add('animated');
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Handle window resize
window.addEventListener('resize', () => {
    // Reset mobile menu on resize
    if (window.innerWidth >= 768 && mobileNav) {
        mobileNav.style.display = 'none';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show first slide
    if (slides.length > 0) {
        showSlide(0);
    }
    
    // Show first testimonial
    if (testimonialSlides.length > 0) {
        showTestimonial(0);
    }
    
    // Add sticky class to header if page is refreshed while scrolled down
    if (window.scrollY > 100) {
        header.classList.add('sticky');
        if (backToTop) {
            backToTop.classList.add('active');
        }
    }
});