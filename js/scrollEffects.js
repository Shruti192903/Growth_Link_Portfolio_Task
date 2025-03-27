const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('about-text')) {
                const p = entry.target.querySelector('p');
                if (p) {
                    p.classList.add('visible');
                }
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-title, .about-text, .skill-category, .timeline-item, .project-card, .achievement-card').forEach(el => {
    observer.observe(el);
});