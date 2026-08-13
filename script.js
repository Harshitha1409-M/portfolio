// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    /* ====================================
       SMOOTH NAVIGATION
    ==================================== */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ====================================
       NAVBAR SCROLL EFFECT
    ==================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0, 0, 0, 0.25)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* ====================================
       SECTION SCROLL REVEAL
    ==================================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    sections.forEach((section) => {

        observer.observe(section);

    });


    /* ====================================
       CURRENT YEAR
    ==================================== */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.textContent =
            `© ${currentYear} Harshitha. Built with HTML, CSS & JavaScript.`;

    }

});
