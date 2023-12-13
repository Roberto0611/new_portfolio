document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animate-on-scroll");

    function checkScroll() {
        sections.forEach(function (section) {
            const sectionPosition = section.getBoundingClientRect().top;
            if (sectionPosition < window.innerHeight) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }
    
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});
