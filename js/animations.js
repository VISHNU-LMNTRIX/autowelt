/* =========================================
   SCROLL REVEALS
========================================= */

function initializeScrollReveals() {

    const reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        }

    );

    reveals.forEach((element) => {

        const rect = element.getBoundingClientRect();

        const isInitiallyVisible =
            rect.top < window.innerHeight - 40 &&
            rect.bottom > 0;

        if (isInitiallyVisible) {

            element.classList.add("active");

        }

        observer.observe(element);

    });

}


/* =========================================
   HERO TEXT REVEAL
========================================= */

function initializeHeroTextReveal() {

    const textReveal = document.querySelector(".text-reveal");

    if (!textReveal) return;

    setTimeout(() => {

        textReveal.classList.add("active");

    }, 250);

}


/* =========================================
   MASTER INIT
========================================= */

window.initializeAnimations = () => {

    initializeScrollReveals();

    initializeHeroTextReveal();

};
