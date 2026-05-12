import { blogPosts } from "../data/blog.js";

const blogGrid =
    document.getElementById("blog-preview-grid");


if (blogGrid) {

    blogGrid.innerHTML = blogPosts.map(post => `

        <article class="blog-card">

            <div class="blog-card-image">

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

            </div>

        </article>

    `).join("");
}