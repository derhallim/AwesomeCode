$(document).ready(function() {
    $('.nav li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});


window.onresize = function(){
    console.log(document.documentElement.clientWidth)
}