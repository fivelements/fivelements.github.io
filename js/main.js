$(document).ready(function(){
  $("#intro-slider").owlCarousel({
    items: 1,
    singleItem: true,
    loop: true,
    margin:10,
    pagination: true,
    mouseDrag: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000
  });
  $("#testimonials-slider").owlCarousel({
    items: 1,
    singleItem: true,
    loop: true,
    margin:10,
    pagination: true,
    mouseDrag: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000
  });
});

function sendmail() {
  var subject = $("#emailSubject").val()
  var body = $("#emailBody").val()
  var link = "mailto:info@clubejiujitsulisboa.com"
  + "?subject=" + subject
  + "&body=" + body;
  window.location.href = link;
}
