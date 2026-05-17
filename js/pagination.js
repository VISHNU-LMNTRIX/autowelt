export function paginate(items, page = 1, perPage = 4) {

    const totalPages = Math.max(1, Math.ceil(items.length / perPage));

    const currentPage = Math.min(Math.max(page, 1), totalPages);

    const start = (currentPage - 1) * perPage;

    return {
        currentPage,
        totalPages,
        items: items.slice(start, start + perPage)
    };

}


export function renderPagination(container, state, onChange) {

    if (!container) return;

    container.innerHTML = `

        <button
            class="page-control"
            type="button"
            ${state.currentPage === 1 ? "disabled" : ""}
            aria-label="Previous page"
            data-page="${state.currentPage - 1}"
        >
            <span class="material-symbols-outlined">chevron_left</span>
        </button>

        <span class="page-count">
            Page ${state.currentPage} of ${state.totalPages}
        </span>

        <button
            class="page-control"
            type="button"
            ${state.currentPage === state.totalPages ? "disabled" : ""}
            aria-label="Next page"
            data-page="${state.currentPage + 1}"
        >
            <span class="material-symbols-outlined">chevron_right</span>
        </button>

    `;

    container.querySelectorAll("button[data-page]").forEach((button) => {

        button.addEventListener("click", () => {

            onChange(Number(button.dataset.page));

        });

    });

}
