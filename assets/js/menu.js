// menu
$('.menu').on('click', function() {
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
});

//fade in
var slideup = {
    distance: '50px',
    delay: '300',
    easing: 'ease-in',
}

var slideup2 = {
    distance: '50px',
    delay: '600',
    easing: 'ease-in',
}

$(function() {
    ScrollReveal().reveal('.scrollreveal', slideup);
    window.sr = new scrollReveal();
    sr.reveal('.scrollreveal');
})