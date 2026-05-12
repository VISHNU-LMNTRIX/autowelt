const mobileToggle = document.getElementById("mobile-menu-toggle");

const mobileMenu = document.getElementById("mobile-menu");


if (mobileToggle && mobileMenu) {

    mobileToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}