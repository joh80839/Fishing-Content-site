const images = document.querySelectorAll(".rod-img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("pop");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("pop");
  });
});

