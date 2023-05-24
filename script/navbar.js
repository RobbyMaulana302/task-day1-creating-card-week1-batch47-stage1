let hamburger = false;

function hamburgerKlik() {
  let hamburgerNav = document.getElementById("hamburger-nav");

  if (!hamburger) {
    hamburgerNav.style.display = "block";
    hamburger = true;
    console.log(hamburger);
  } else {
    hamburgerNav.style.display = "none";
    hamburger = false;
    console.log(hamburger);
  }
}
