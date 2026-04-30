const pics = document.querySelectorAll(".pic");

pics.forEach(pic => {
    const img = pic.querySelector(".rod-img");

    pic.addEventListener("mouseenter", () => {
        img.classList.add("pop");
    });

    pic.addEventListener("mouseleave", () => {
        img.classList.remove("pop");
    });
});

if (window.innerWidth <= 768) {
    images.forEach(img => {
        img.addEventListener("click", (e) => {
            const picBox = img.closest(".pic");

            if (!picBox.classList.contains("active")) {
                e.preventDefault();
                picBox.classList.add("active");
            }
        });
    });
}

window.addEventListener("pageshow", () => {
    document.querySelectorAll(".pic").forEach(pic => {
        pic.classList.remove("active");
    });

    document.querySelectorAll(".rod-img").forEach(img => {
        img.classList.remove("pop");
    });
});

