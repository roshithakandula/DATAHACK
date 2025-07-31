// script.js
console.log("Page Loaded Successfully!");
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;
    info.classList.toggle("hidden");
    button.textContent = info.classList.contains("hidden") ? "Read More" : "Show Less";
  });
});
