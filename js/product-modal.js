function productVisual(product) {

    return `

        <div class="product-visual product-visual-large" aria-hidden="true">
            <div class="product-glow"></div>
            <div class="product-object ${product.shape}">
                <span>${product.code}</span>
            </div>
        </div>

    `;

}


function renderList(items) {

    return items.map((item) => `

        <li>
            <span class="material-symbols-outlined">horizontal_rule</span>
            ${item}
        </li>

    `).join("");

}


function renderMetrics(metrics) {

    return metrics.map((metric) => `

        <div class="product-meter">
            <div class="product-meter-top">
                <span>${metric.label}</span>
                <strong>${metric.value}%</strong>
            </div>
            <div class="product-meter-track">
                <span style="width: ${metric.value}%"></span>
            </div>
        </div>

    `).join("");

}


export function renderProductDetail(product) {

    return `

        <section
            class="product-detail-panel reveal-scale"
            id="product-detail"
            aria-live="polite"
        >
            <button
                class="product-detail-close"
                type="button"
                aria-label="Close product details"
                data-close-product
            >
                <span class="material-symbols-outlined">close</span>
            </button>

            <div class="product-detail-grid">
                ${productVisual(product)}

                <div class="product-detail-copy">
                    <p class="detail-kicker">${product.label}</p>
                    <h2>
                        ${product.name}
                        <span>${product.subtitle}</span>
                    </h2>
                    <p>${product.description}</p>

                    <div class="product-spec-grid">
                        <div>
                            <h3>Technical Specs</h3>
                            <ul>${renderList(product.specs)}</ul>
                        </div>

                        <div>
                            <h3>Application</h3>
                            <ul>${renderList(product.application)}</ul>
                        </div>
                    </div>

                    <div class="product-meters">
                        ${renderMetrics(product.metrics)}
                    </div>

                    <div class="product-detail-actions">
                        <a class="btn-primary" href="contact.html">
                            Download MSDS
                            <span class="material-symbols-outlined">download</span>
                        </a>
                        <a class="btn-secondary" href="contact.html">
                            View Application Guide
                        </a>
                    </div>
                </div>
            </div>
        </section>

    `;

}
