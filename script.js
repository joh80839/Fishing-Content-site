const images = document.querySelectorAll(".rod-img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("pop");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("pop");
  });
});

if (window.innerWidth <= 768) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("pop");
            } else {
                entry.target.classList.remove("pop");
            }
        });
    }, {
        threshold: 0.5
    });

    images.forEach(img => {
        observer.observe(img);
    });
}

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

