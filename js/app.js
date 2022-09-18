// click to close nav bar 
$("#navbarSupportedContent").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarSupportedContent").collapse('hide');
    });
});


// Preloader
const loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});