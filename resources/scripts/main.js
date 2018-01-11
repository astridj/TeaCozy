$(document).ready(function() {
  $('#nav-toggle').on('click', function(event) {
      event.preventDefault();
      $('.mobile-list').slideToggle();
      $(this).toggleClass("active");
    });

  $(".mobile-list a").on('click', function(event) {
    event.preventDefault();
    var headerHeight = $("header").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - headerHeight;
    $("html").animate({
      scrollTop: newScrollCoordinate,
    });
  });
});
