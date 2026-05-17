import { productCategories, products } from "../data/products.js";
import { paginate, renderPagination } from "./pagination.js";
import { renderProductDetail } from "./product-modal.js";


const categoryGrid = document.getElementById("product-category-grid");
const productGrid = document.getElementById("product-grid");
const productHeading = document.getElementById("product-heading");
const productCount = document.getElementById("product-count");
const pagination = document.getElementById("product-pagination");
const detailMount = document.getElementById("product-detail-mount");
const viewAllButton = document.getElementById("view-all-categories");

let activeCategory = "paint-care";
let showAllCategories = false;
let currentPage = 1;
let selectedProductId = "aw-01";


function visibleCategories() {

    return showAllCategories ?
        productCategories :
        productCategories.slice(0, 3);

}


function renderCategories() {

    if (!categoryGrid) return;

    categoryGrid.innerHTML = visibleCategories().map((category, index) => `

        <article class="reveal-scale delay-${index + 1}">
            <button
                class="product-category-card hover-lift ${category.id === activeCategory ? "active" : ""}"
                type="button"
                data-category="${category.id}"
            >
                <img src="${category.image}" alt="${category.title}">
                <span class="category-scrim"></span>
                <span class="category-content">
                    <span>
                        <strong>${category.title}</strong>
                        <small>${category.countLabel}</small>
                    </span>
                    <span class="material-symbols-outlined">arrow_forward</span>
                </span>
            </button>
        </article>

    `).join("");

    categoryGrid.querySelectorAll("[data-category]").forEach((button) => {

        button.addEventListener("click", () => {

            activeCategory = button.dataset.category;
            currentPage = 1;
            selectedProductId = null;
            renderProducts();
            renderCategories();

            if (window.initializeAnimations) {

                window.initializeAnimations();

            }

        });

    });

    if (viewAllButton) {

        viewAllButton.textContent =
            showAllCategories ? "Show Featured Categories" : "View All Categories";

    }

}


function productVisual(product) {

    return `

        <div class="product-visual" aria-hidden="true">
            <div class="product-glow"></div>
            <div class="product-object ${product.shape}">
                <span>${product.code}</span>
            </div>
        </div>

    `;

}


function renderProducts(page = currentPage) {

    if (!productGrid) return;

    const filtered = products.filter(
        (product) => product.category === activeCategory
    );

    const category = productCategories.find(
        (item) => item.id === activeCategory
    );

    const pageState = paginate(filtered, page, 4);

    currentPage = pageState.currentPage;

    productHeading.textContent =
        `${category?.title || "Product"} Formulation`;

    productCount.textContent =
        `Showing ${pageState.items.length} of ${filtered.length} Items`;

    productGrid.innerHTML = pageState.items.map((product, index) => `

        <article class="reveal-scale delay-${index + 1}">
            <button
                class="product-card hover-lift ${product.id === selectedProductId ? "selected" : ""}"
                type="button"
                data-product="${product.id}"
            >
                ${productVisual(product)}

                <span class="product-code">${product.code}</span>
                <strong>${product.name}</strong>
                <span class="product-summary">${product.summary}</span>

                <span class="product-details-link">
                    Details
                    <span class="material-symbols-outlined">add</span>
                </span>
            </button>
        </article>

    `).join("");

    productGrid.querySelectorAll("[data-product]").forEach((button) => {

        button.addEventListener("click", () => {

            selectedProductId = button.dataset.product;
            renderProducts(currentPage);

            detailMount?.querySelector("#product-detail")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    renderPagination(pagination, pageState, (nextPage) => {

        currentPage = nextPage;
        selectedProductId = null;
        renderProducts(nextPage);
        renderDetail();

    });

    renderDetail();

    if (window.initializeAnimations) {

        window.initializeAnimations();

    }

}


function renderDetail() {

    if (!detailMount) return;

    const product = products.find((item) => item.id === selectedProductId);

    if (!product) {

        detailMount.innerHTML = "";
        return;

    }

    detailMount.innerHTML = renderProductDetail(product);

    detailMount.querySelector("[data-close-product]")?.addEventListener(
        "click",
        () => {

            const panel = detailMount.querySelector("#product-detail");

            if (!panel) {

                selectedProductId = null;
                renderProducts(currentPage);
                return;

            }

            if (!panel.classList.contains("active")) {

                selectedProductId = null;
                renderProducts(currentPage);
                return;

            }

            const finishClose = (event) => {

                if (event.target !== panel) return;

                panel.removeEventListener("transitionend", finishClose);

                selectedProductId = null;
                renderProducts(currentPage);

            };

            panel.addEventListener("transitionend", finishClose);

            panel.classList.add("closing");

        }
    );

}


if (viewAllButton) {

    viewAllButton.addEventListener("click", () => {

        showAllCategories = !showAllCategories;
        renderCategories();

        if (window.initializeAnimations) {

            window.initializeAnimations();

        }

    });

}


renderCategories();
renderProducts();
