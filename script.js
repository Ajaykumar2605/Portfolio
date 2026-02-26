document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    const mobileThemeToggleBtn = document.getElementById('theme-toggle-mobile');
    const mobileThemeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon-mobile');
    const mobileThemeToggleLightIcon = document.getElementById('theme-toggle-light-icon-mobile');

    // Check system preference or localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('color-theme');
    
    const setDarkMode = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
            mobileThemeToggleLightIcon.classList.remove('hidden');
            mobileThemeToggleDarkIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
            mobileThemeToggleLightIcon.classList.add('hidden');
            mobileThemeToggleDarkIcon.classList.remove('hidden');
        }
    };

    // Initialize Theme
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setDarkMode(true);
        }
    };

    themeToggleBtn.addEventListener('click', toggleTheme);
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
        } else {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-xmark');
        }
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.classList.remove('fa-xmark');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Optional: Stop observing once revealed
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Update Footer Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Active Navbar Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Offset for visual accuracy
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
