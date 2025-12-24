// Animate skill bars when visible
const skillBars = document.querySelectorAll('.bar div');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const level = entry.target.getAttribute('data-level');
            entry.target.style.width = level + '%';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.background = window.scrollY > 50
        ? 'rgba(2,6,23,0.95)'
        : 'rgba(2,6,23,0.8)';
});
