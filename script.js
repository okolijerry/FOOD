window.addEventListener("scroll", () => {
  document.querySelector(".menu").classList.toggle("window-scrolled", window.scrollY > 0);
})

