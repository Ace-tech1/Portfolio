
 document.addEventListener('DOMContentLoaded', () => {


            const elements = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0.1
            });

            elements.forEach(el => {
                const delay = el.getAttribute('data-delay');
                if (delay) {
                    el.style.transitionDelay = delay;
                }
                observer.observe(el);
            });


            // HERO TEXT ANIMATION (Character by Character)

            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const text = heroTitle.textContent;
                heroTitle.textContent = '';

                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char; 
                    span.classList.add('char');
                    span.style.transitionDelay = `${index * 50}ms`;
                    heroTitle.appendChild(span);
                });


                setTimeout(() => {
                    document.querySelectorAll('.hero-title .char').forEach(char => {
                        char.classList.add('in-view');
                    });
                }, 100);
            }

      
            // MOBILE MENU TOGGLE
            
            const menuButton = document.getElementById('mobile-menu-button');
            const closeButton = document.getElementById('close-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelectorAll('.mobile-nav-link');
            const scrollBarContainer = document.getElementById('scrollProgressContainer');

           const toggleMenu = () => {
                mobileMenu.classList.toggle('open');
      
                document.body.classList.toggle('overflow-hidden', mobileMenu.classList.contains('open'));

       
                if (scrollBarContainer) {
                    if (mobileMenu.classList.contains('open')) {
                        scrollBarContainer.style.visibility = 'hidden';
                        scrollBarContainer.style.opacity = '0';
                    } else {
                        scrollBarContainer.style.visibility = ''; 
                        scrollBarContainer.style.opacity = '';
                    }
                }
               
            };

            menuButton.addEventListener('click', toggleMenu);
            closeButton.addEventListener('click', toggleMenu);


            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('open')) {
                        toggleMenu();
                    }
                });
            });

        });



        // progress bar 
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('scrollProgressContainer');
    const progressBar = document.querySelector('.progress-bar');
    const circumference = 2 * Math.PI * 45; 

    if (!container || !progressBar) return;


    window.addEventListener('scroll', function() {

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY / scrollHeight) * 100;

     
        const offset = circumference - (scrollPercent / 100) * circumference;
        progressBar.style.strokeDashoffset = offset;

        // Show/Hide the button
        if (window.scrollY > 200) { 
            container.classList.add('show');
        } else {
            container.classList.remove('show');
        }
    });

    //  CLICK EVENT: Scroll to top
    container.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});

// footer year 
document.getElementById('year').textContent = new Date().getFullYear();