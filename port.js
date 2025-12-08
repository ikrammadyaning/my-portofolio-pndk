const select = document.getElementById("nasyidPilih");
const player = document.getElementById("audio");

select.addEventListener("change", () => {
  if (select.value !== "") {
    player.src = select.value;
    player.play();
  }
});

var typed = new Typed(".teks-web", {
  strings: ["Front End Dev", "Graphic Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
  showCursor: false
});

const fadeEls = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
fadeEls.forEach(el => observer.observe(el));