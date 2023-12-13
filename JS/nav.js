document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Select all sections

    function highlightNav() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Adjust this value as needed
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-link').forEach((navLink) => {
                    navLink.classList.remove('active-section');
                });

                // Add active class to the corresponding nav item
                const navLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (navLink) {
                    navLink.classList.add('active-section');
                }
            }
        });
    }
    // Highlight the active section on initial load
    highlightNav();
    
    // Highlight the active section on scroll
    window.addEventListener('scroll', highlightNav);
});
