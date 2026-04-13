// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));


// NEWSLETTER
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (email) {
    alert("Merci pour ton inscription !");
    document.getElementById("email").value = "";
  }
});


// PARALLAX HERO
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-section");
  let scroll = window.pageYOffset;
  hero.style.backgroundPositionY = scroll * 0.4 + "px";
});