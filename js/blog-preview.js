import { blogPosts } from "../data/blog.js";

const blogGrid =
    document.getElementById("blog-preview-grid");

let modal;
let modalBody;


function ensureArticleModal() {

    modal = document.getElementById("article-modal");
    modalBody = document.getElementById("article-modal-body");

    if (modal && modalBody) return;

    modal = document.createElement("aside");
    modal.className = "article-modal";
    modal.id = "article-modal";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `

        <div class="article-modal-panel">
            <button
                type="button"
                class="article-modal-close"
                data-close-article
                aria-label="Close article"
            >
                <span class="material-symbols-outlined">close</span>
            </button>
            <div id="article-modal-body"></div>
        </div>

    `;

    document.body.appendChild(modal);
    modalBody = document.getElementById("article-modal-body");

    modal.addEventListener("click", (event) => {

        if (
            event.target === modal ||
            event.target.closest("[data-close-article]")
        ) {

            closeArticle();

        }

    });

}


function openArticle(id) {

    const post = blogPosts.find((item) => item.id === id);

    if (!post) return;

    ensureArticleModal();

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


if (blogGrid) {

    blogGrid.innerHTML = blogPosts.slice(0, 2).map((post, index) => `

        <article class="reveal-scale delay-${index + 1}">

            <div class="blog-card hover-lift">

                <div class="blog-card-image hover-image">

                    <img
                        src="${post.image}"
                        alt="${post.title}"
                    >

                </div>

                <div class="blog-card-content">

                    <div class="blog-card-meta">

                        <span class="blog-category">
                            ${post.category}
                        </span>

                        <span class="blog-date">
                            ${post.date}
                        </span>

                    </div>

                    <h3>${post.title}</h3>

                    <p>${post.excerpt}</p>

                    <button
                        class="blog-read-more"
                        type="button"
                        data-preview-article="${post.id}"
                    >
                        Read More
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>

                </div>
                
            </div>

        </article>

    `).join("");

    blogGrid.querySelectorAll("[data-preview-article]").forEach((button) => {

        button.addEventListener("click", () => {

            openArticle(button.dataset.previewArticle);

        });

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeArticle();

        }

    });

}
