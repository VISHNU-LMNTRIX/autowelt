/* =========================================
   COMPONENT LOADER
========================================= */

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        const html = await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.error(`Error loading component: ${file}`, error);

    }

}


/* =========================================
   INITIALIZE COMPONENTS
========================================= */

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbar-container",
        "/components/navbar.html"
    );

    await loadComponent(
        "services-section-container",
        "/components/services-section.html"
    );

    await loadComponent(
        "footer-container",
        "/components/footer.html"
    );

    await loadComponent(
        "standards-section-container",
        "/components/standards-section.html"
    );

    await loadComponent(
        "brands-section-container",
        "/components/brands-section.html"
    );

    await loadComponent(
        "blog-preview-section-container",
        "/components/blog-preview-section.html"
    );

    await import("./blog-preview.js");

    if (window.initializeAnimations) {

        window.initializeAnimations();

    }

});