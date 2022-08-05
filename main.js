const hamburger = document.getElementById('hamburger-box');
const nav = document.getElementById('nav');

hamburger.addEventListener( 'click' ,function() {
    nav.style.cssText = "transform: translateY(0);"
});