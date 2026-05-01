const pics = document.querySelectorAll(".pic");

pics.forEach(pic => {
    const img = pic.querySelector(".rod-img");
    const link = pic.querySelector("a");

    // Desktop hover
    pic.addEventListener("mouseenter", () => {
        img.classList.add("pop");
    });

    pic.addEventListener("mouseleave", () => {
        img.classList.remove("pop");
    });

    // Mobile behavior
    if (window.innerWidth <= 768) {
        link.addEventListener("click", (e) => {
            if (!pic.classList.contains("active")) {
                e.preventDefault(); // stop navigation on first tap
                pic.classList.add("active");
                img.classList.add("pop");
            }
            // second tap = link works normally
        });
    }
});

// Reset when coming back
window.addEventListener("pageshow", () => {
    pics.forEach(pic => {
        const img = pic.querySelector(".rod-img");

        pic.classList.remove("active");
        img.classList.remove("pop");
    });
});