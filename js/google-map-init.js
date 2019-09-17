jQuery(document).ready(function() {
  "use strict";

  var a = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(38.7069735, -9.1894184),
    styles: [{
      "featureType": "landscape",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 65
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 51
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 30
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 40
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": -25
        },
        {
          "saturation": -100
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#ffff00"
        },
        {
          "lightness": -25
        },
        {
          "saturation": -97
        }
      ]
    }]
  };

  function b() {
    var c = new google.maps.Map(document.getElementById("matriz"), a);
    new google.maps.Marker({
      position: new google.maps.LatLng(38.7069735, -9.1894184),
      map: c,
      title: "5EJ Ajuda"
    })

    a.center = new google.maps.LatLng(38.7198593, -9.1603465);
    var d = new google.maps.Map(document.getElementById("rato"), a);
    new google.maps.Marker({
      position: new google.maps.LatLng(38.7198593, -9.1603465),
      map: d,
      title: "5EJ Rato"
    })

    a.center = new google.maps.LatLng(38.7807602, -9.166068);
    var e = new google.maps.Map(document.getElementById("lumiar"), a);
    new google.maps.Marker({
      position: new google.maps.LatLng(38.7807602, -9.166068),
      map: e,
      title: "5EJ Lumiar"
    })
  }

  google.maps.event.addDomListener(window, "load", b);
});
