// Newsletter simple (démo)
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = this.querySelector("input").value;

  if(email) {
    alert("Merci pour votre inscription : " + email);
    this.reset();
  }
});