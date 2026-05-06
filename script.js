const pics = document.querySelectorAll(".pic");
const isMobile = window.innerWidth <= 768;

pics.forEach(pic => {
    const img = pic.querySelector(".rod-img");
    const link = pic.querySelector("a");

    // Desktop/laptop hover 
    if (!isMobile) {
        pic.addEventListener("mouseenter", () => {
            img.classList.add("pop");
        });

        pic.addEventListener("mouseleave", () => {
            img.classList.remove("pop");
        });
    }

    // Phone/tablet double tap
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

// Pictures reset when using the browser back button
window.addEventListener("pageshow", () => {
    pics.forEach(pic => {
        const img = pic.querySelector(".rod-img");

        pic.classList.remove("active");
        img.classList.remove("pop");
    });
});
