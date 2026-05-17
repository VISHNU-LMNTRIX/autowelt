import { services } from "../data/services.js";
import { initializeComparisonSliders } from "./comparison-slider.js";


const servicesMount = document.getElementById("services-detail-list");


function renderFeature(feature) {

    return `

        <li>
            <span class="material-symbols-outlined">${feature.icon}</span>
            <div>
                <h3>${feature.title}</h3>
                <p>${feature.text}</p>
            </div>
        </li>

    `;

}


function renderComparison(service) {

    return `

        <div class="comparison-slider" aria-label="${service.title} before and after comparison">
            <img
                class="comparison-base"
                src="${service.image}"
                alt="${service.title} after detailing"
            >

            <div class="comparison-overlay">
                <img
                    src="${service.image}"
                    alt="${service.title} before detailing"
                >
            </div>

            <button
                class="comparison-handle"
                type="button"
                role="slider"
                aria-label="Comparison position"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
            >
                <span class="material-symbols-outlined">drag_indicator</span>
            </button>

            <span class="comparison-label comparison-label-before">
                ${service.beforeLabel}
            </span>

            <span class="comparison-label comparison-label-after">
                ${service.afterLabel}
            </span>
        </div>

    `;

}


function renderServices() {

    if (!servicesMount) return;

    servicesMount.innerHTML = services.map((service, index) => `

        <section class="service-detail-row ${index % 2 ? "service-detail-row-reverse" : ""}">
            <div class="service-detail-copy reveal-left">
                <p class="eyebrow-pill">
                    <span class="material-symbols-outlined">${service.icon}</span>
                    ${service.eyebrow}
                </p>

                <h2>${service.title}</h2>
                <p class="service-detail-description">${service.description}</p>

                <ul class="service-feature-list">
                    ${service.features.map(renderFeature).join("")}
                </ul>

                <a class="btn-secondary" href="#quote">
                    ${service.cta}
                </a>
            </div>

            <article class="reveal-scale delay-1">
                <div class="service-comparison-card hover-lift">
                    ${renderComparison(service)}
                </div>
            </article>
        </section>

    `).join("");

    initializeComparisonSliders(servicesMount);

    if (window.initializeAnimations) {

        window.initializeAnimations();

    }

}


renderServices();
