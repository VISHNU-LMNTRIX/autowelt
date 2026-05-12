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
            threshold: 0.15,
            rootMargin: "0px 0px -80px 0px"
        }

    );

    reveals.forEach((element) => {

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