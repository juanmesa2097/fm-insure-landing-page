// Navbar
const navbar = document.querySelector("#navbar");

function onClickNavbarToggler(e) {
  if (navbar.className.indexOf("is-visible") > -1) {
    navbar.classList.remove("is-visible");
    e.target.className = e.target.className.replace("im-x-mark", "im-menu");
  } else {
    navbar.classList.add("is-visible");
    e.target.className = e.target.className.replace("im-menu", "im-x-mark");
  }
}
