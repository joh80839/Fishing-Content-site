const images = document.querySelectorAll(".rod-img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("pop");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("pop");
  });
});

images.forEach(img => {
    img.addEventListener("click", (e) => {
        const picBox = img.closest(".pic");

        if (!picBox.classList.contains("active")) {
            e.preventDefault();
            picBox.classList.add("active");
        }
    });
});

window.addEventListener("pageshow", () => {
    document.querySelectorAll(".pic").forEach(pic => {
        pic.classList.remove("active");
    });

    document.querySelectorAll(".rod-img").forEach(img => {
        img.classList.remove("pop");
    });
});

const line = document.querySelector(".moving-line");
const titleBox = document.querySelector(".title-box");

let pos = 0;
let speed = 2;
let direction = 1;

function animateLine() {
    const maxWidth = titleBox.offsetWidth - line.offsetWidth;

    pos += speed * direction;

    if (pos >= maxWidth || pos <= 0) {
        direction *= -1;
    }

    line.style.left = pos + "px";

    requestAnimationFrame(animateLine);
}

animateLine();

