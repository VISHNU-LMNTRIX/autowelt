export function initializeComparisonSliders(root = document) {

    const sliders = root.querySelectorAll(".comparison-slider");

    sliders.forEach((slider) => {

        const overlay = slider.querySelector(".comparison-overlay");

        const handle = slider.querySelector(".comparison-handle");

        if (!overlay || !handle || handle.dataset.bound) return;

        handle.dataset.bound = "true";

        const update = (clientX) => {

            const rect = slider.getBoundingClientRect();

            const position = Math.min(
                Math.max((clientX - rect.left) / rect.width, 0),
                1
            );

            const percent = `${position * 100}%`;

            overlay.style.width = percent;

            handle.style.left = percent;

            handle.setAttribute(
                "aria-valuenow",
                String(Math.round(position * 100))
            );

        };


        const startDrag = (event) => {

            event.preventDefault();

            const pointerMove = (moveEvent) => {

                update(moveEvent.clientX);

            };

            const pointerUp = () => {

                window.removeEventListener("pointermove", pointerMove);
                window.removeEventListener("pointerup", pointerUp);

            };

            window.addEventListener("pointermove", pointerMove);
            window.addEventListener("pointerup", pointerUp);

            update(event.clientX);

        };


        slider.addEventListener("pointerdown", startDrag);

        handle.addEventListener("keydown", (event) => {

            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {

                return;

            }

            event.preventDefault();

            const current = Number(handle.getAttribute("aria-valuenow")) || 50;

            let next = current;

            if (event.key === "ArrowLeft") next = current - 5;
            if (event.key === "ArrowRight") next = current + 5;
            if (event.key === "Home") next = 0;
            if (event.key === "End") next = 100;

            const rect = slider.getBoundingClientRect();

            update(rect.left + (Math.min(Math.max(next, 0), 100) / 100) * rect.width);

        });

    });

}


window.initializeComparisonSliders = initializeComparisonSliders;
