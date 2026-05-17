import { blogPosts } from "../data/blog.js";
import { paginate, renderPagination } from "./pagination.js";


const categoryButtons = document.getElementById("blog-categories");
const searchInput = document.getElementById("blog-search");
const grid = document.getElementById("blog-grid");
const pagination = document.getElementById("blog-pagination");
const modal = document.getElementById("article-modal");
const modalBody = document.getElementById("article-modal-body");
const featuredMount = document.getElementById("featured-article");

let activeCategory = "All";
let currentPage = 1;
const perPage = 3;


function categories() {

    return ["All", ...new Set(blogPosts.map((post) => post.category))];

}


function renderFeatured() {

    const post = blogPosts.find((item) => item.featured) || blogPosts[0];

    if (!featuredMount || !post) return;

    featuredMount.innerHTML = `

        <img src="${post.image}" alt="${post.title}">
        <div class="blog-feature-overlay"></div>
        <article class="blog-feature-panel reveal-scale active">
            <p>
                <span>${post.category}</span>
                ${post.readTime}
            </p>
            <h1>${post.title}</h1>
            <p>${post.excerpt}</p>
            <button class="btn-primary" type="button" data-article="${post.id}">
                Read Full Article
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        </article>

    `;

    featuredMount.querySelector("[data-article]")?.addEventListener("click", () => {

        openArticle(post.id);

    });

}


function renderCategories() {

    if (!categoryButtons) return;

    categoryButtons.innerHTML = categories().map((category) => `

        <button
            class="blog-filter ${category === activeCategory ? "active" : ""}"
            type="button"
            data-category="${category}"
        >
            ${category}
        </button>

    `).join("");

    categoryButtons.querySelectorAll("[data-category]").forEach((button) => {

        button.addEventListener("click", () => {

            activeCategory = button.dataset.category;
            currentPage = 1;
            renderCategories();
            renderGrid();

        });

    });

}


function filteredPosts() {

    const query = (searchInput?.value || "").trim().toLowerCase();

    return blogPosts.filter((post) => {

        const categoryMatch =
            activeCategory === "All" || post.category === activeCategory;

        const queryMatch =
            !query ||
            [post.title, post.excerpt, post.category].join(" ").toLowerCase().includes(query);

        return categoryMatch && queryMatch;

    });

}


function renderGrid(page = currentPage) {

    if (!grid) return;

    const posts = filteredPosts();

    const pageState = paginate(posts, page, perPage);

    currentPage = pageState.currentPage;

    if (!pageState.items.length) {

        grid.innerHTML = `
            <p class="blog-empty">No articles match that filter.</p>
        `;

        renderPagination(pagination, pageState, () => {});

        return;

    }

    grid.innerHTML = pageState.items.map((post, index) => `

        <article class="reveal-scale delay-${index + 1}">
            <button
                class="article-card hover-lift ${index === 2 ? "article-card-wide" : ""}"
                type="button"
                data-article="${post.id}"
            >
                <span class="article-image hover-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span>${post.category}</span>
                </span>

                <span class="article-copy">
                    <strong>${post.title}</strong>
                    <span>${post.excerpt}</span>
                    <small>
                        ${post.date}
                        <span>Read More</span>
                    </small>
                </span>
            </button>
        </article>

    `).join("");

    grid.querySelectorAll("[data-article]").forEach((button) => {

        button.addEventListener("click", () => {

            openArticle(button.dataset.article);

        });

    });

    renderPagination(pagination, pageState, (nextPage) => {

        renderGrid(nextPage);

    });

    if (window.initializeAnimations) {

        window.initializeAnimations();

    }

}


function openArticle(id) {

    const post = blogPosts.find((item) => item.id === id);

    if (!modal || !modalBody || !post) return;

    modalBody.innerHTML = `

        <p class="detail-kicker">${post.category} / ${post.readTime}</p>
        <h2>${post.title}</h2>
        <p class="article-modal-date">${post.date}</p>
        <img src="${post.image}" alt="${post.title}">
        ${post.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}

    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

}


function closeArticle() {

    modal?.classList.remove("active");
    modal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

}


modal?.addEventListener("click", (event) => {

    if (
        event.target === modal ||
        event.target.closest("[data-close-article]")
    ) {

        closeArticle();

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeArticle();

    }

});


searchInput?.addEventListener("input", () => {

    currentPage = 1;
    renderGrid();

});


renderFeatured();
renderCategories();
renderGrid();
