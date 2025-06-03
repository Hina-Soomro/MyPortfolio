document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    hamburgerToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open');
    });

    // Close dropdown when clicking a nav link
    const navLinks = dropdownMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('open');
        });
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-section .text-center, .hero-section .perspective', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Section Title Animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Card Animations
    gsap.utils.toArray('.card-3d').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Skill Progress Bars
    gsap.utils.toArray('.skill-progress').forEach(bar => {
        gsap.from(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            width: 0,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
});
