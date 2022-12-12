let menu  = document.querySelector("#icone-menu");
let barraNav = document.querySelector(".nav");

menu.addEventListener("click", function () {
    barraNav.classList.toggle("active");
});

window.onscroll = () => {
    barraNav.classList.remove("active");
}