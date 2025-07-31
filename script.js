(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
                distance = countDown - now;

          if (distance < 0) {
            clearInterval(x);
          }
        }, 1000);
})();

var typed = new Typed(".text", {
  strings: [" + CyberSecurity", "+ DroneTechnology"],
  typeSpeed: 80,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.nextElementSibling;
    modal.classList.toggle("active");
  });
});
