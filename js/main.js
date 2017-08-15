$(document).ready(function(){
  $(".secure-left-hover").hover(
    function handleIn(){
      $("#left-drawer").css('left', 0);
    },
    function handleOut(){
      $("#left-drawer").css('left', "-50%");
    },
  );
  $(".secure-right-hover").hover(
    function handleIn(){
      $("#right-drawer").css('right', 0);
    },
    function handleOut(){
      $("#right-drawer").css('right', "-50%");
    },
  );
  $("#portfolio-contant-active").mixItUp();
  $("#testimonial-slider").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
  });
  $("#pricing-slider").owlCarousel({
    singleItem:true,
    autoPlay: false,
    loop:false,
  });
  $("#works-logo").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
  });
  //// google map
  //var map;
  //function initMap() {
  //map = new google.maps.Map(document.getElementById('map'), {
  //center: {lat: 38.707113, lng: -9.1881},
  //zoom: 8
  //});
  //}
  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
