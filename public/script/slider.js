document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const slides = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth;
    const visibleSlides = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    function updateSlider() {
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = slides.length - visibleSlides();
        currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        const maxIndex = slides.length - visibleSlides();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
        updateSlider();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateSlider();
    });
});