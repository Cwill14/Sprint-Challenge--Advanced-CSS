window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 96.8 || document.documentElement.scrollTop > 96.8) {
        document.getElementById("nav-container").style.opacity = "0.75";
    } else {
        document.getElementById("nav-container").style.opacity = "1";
    }
}