const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var loader = document.querySelector("#loader");

setTimeout(function () {
    loader.style.top = "-100%";
}, 4000);

var menu = document.querySelector("nav h3");
var full = document.querySelector('#full-scr');
var navimg = document.querySelector("nav img");
var isOpen = false;

menu.addEventListener("click", function(){
    if (!isOpen) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        isOpen = true;
    } else {
        full.style.top = "-200%";
        full.style.transition = "all ease-out 2s";
        navimg.style.opacity = 1;
        isOpen = false;
    }
});
