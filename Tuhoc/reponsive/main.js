const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = $$(".service-content-right-img");
$$$.forEach((hover, index) => {
  hover.onclick = function () {
    $(".service-content-right-img.active").classList.remove("active");
    this.classList.add("active");
  };
});

//

var menu = document.getElementById("header-top");
var sidebar = document.querySelector(".sidebar");

var dots = document.getElementById("dots");
var toggle = false;
dots.onclick = () => {
  toggle = true;
  toggleMenu();
};
function toggleMenu() {
  let translateX = toggle ? "translateX(0)" : "translateX(100%)";
  sidebar.style.transform = translateX;
}

window.addEventListener("click", (e) => {
  if (!dots.contains(e.target)) {
    toggle = false;
    toggleMenu();
  }
});
