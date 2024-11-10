const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $("h1").addClass("animate__animated animate__fadeInTopLeft");
      $("button").addClass("animate__animated animate__bounce");
    } else {
      $("button").removeClass("animate__animated animate__bounce");

      $("h1").removeClass("animate__animated animate__fadeInTopLeft");
    }
  });
});

const cards = document.querySelectorAll("h1");

cards.forEach((card) => {
  observer.observe(card);
});
