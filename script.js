document.addEventListener("DOMContentLoaded", () => {
  const instagramButton = document.querySelector(".toque");

  if (instagramButton) {
    instagramButton.addEventListener("click", () => {
      const url = instagramButton.dataset.instagram;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  }
});
