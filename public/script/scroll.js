document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.animate-fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Check if any part of the element is visible
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
            
            if (isVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run once on load
    fadeInOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', fadeInOnScroll);
});