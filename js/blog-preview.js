import { blogPosts } from "../data/blog.js";

const blogGrid =
    document.getElementById("blog-preview-grid");


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

                </div>
                
            </div>

        </article>

    `).join("");

}
