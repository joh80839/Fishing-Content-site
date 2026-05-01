const pics = document.querySelectorAll(".pic");
const isMobile = window.innerWidth <= 768;

pics.forEach(pic => {
    const img = pic.querySelector(".rod-img");
    const link = pic.querySelector("a");

    // Desktop/laptop hover only
    if (!isMobile) {
        pic.addEventListener("mouseenter", () => {
            img.classList.add("pop");
        });

        pic.addEventListener("mouseleave", () => {
            img.classList.remove("pop");
        });
    }

    // Phone/tablet hover only
    if (isMobile) {
        link.addEventListener("click", (e) => {
            if (!pic.classList.contains("active")) {
                e.preventDefault();
                pic.classList.add("active");
                img.classList.add("pop");
            }
        });
    }
});

// Reset when returning with browser back button
window.addEventListener("pageshow", () => {
    pics.forEach(pic => {
        const img = pic.querySelector(".rod-img");

        pic.classList.remove("active");
        img.classList.remove("pop");
    });
});
