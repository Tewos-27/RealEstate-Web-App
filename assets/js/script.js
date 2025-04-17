'use strict';
/****
navbar toggle in mobile
*/
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));
/***
Header scrolls state
 ***/
const $header =  document.querySelectorAll("[data-header]");
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/*add to favorite button toggle */



$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});
