// $(document).ready(function() {
//     $('.nav li.dropdown').hover(function() {
//         $(this).addClass('open');
//     }, function() {
//         $(this).removeClass('open');
//     });
// });

$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  
window.onresize = function(){
    console.log(document.documentElement.clientWidth)
}