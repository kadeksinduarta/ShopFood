const link = document.querySelector(".link");

const menu = (document.querySelector(".menu-hum").onclick = () => {
  link.classList.toggle("active");
});

const humberger = document.querySelector(".menu-hum");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !link.contains(e.target)) {
    link.classList.remove("active");
  }
});
