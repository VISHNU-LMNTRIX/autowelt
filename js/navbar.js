function initializeNavbar() {

    const mobileToggle = document.getElementById("mobile-menu-toggle");

    const mobileMenu = document.getElementById("mobile-menu");

    const links = document.querySelectorAll(
        ".nav-link, .mobile-menu a:not(.mobile-cta)"
    );

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    links.forEach((link) => {

        const linkPage =
            link.getAttribute("href")?.split("/").pop() || "index.html";

        link.classList.toggle(
            "active-link",
            linkPage === currentPage
        );

    });


    if (mobileToggle && mobileMenu && !mobileToggle.dataset.bound) {

        mobileToggle.dataset.bound = "true";

        mobileToggle.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            const isOpen = mobileMenu.classList.contains("active");

            mobileToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        mobileMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                mobileToggle.setAttribute("aria-expanded", "false");

            });

        });

    }

}


window.initializeNavbar = initializeNavbar;


document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector(".navbar")) {

        initializeNavbar();

    }

});
