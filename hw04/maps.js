
(function() {
'use strict';
  //=============================================================================
  $('#selectMap').on('change', onListChange);

  var googleStaticMapsApiKey = 'AIzaSyA223DwlYmEx7j0XJ1v8TKN1VaHXeDYgLQ';
  var keyUrl = 'key=' + googleStaticMapsApiKey;

  function onListChange(evt) {
    var mapUrl='#';
    var centerUrl;
    var zoomUrl;
    var sizeUrl= 'size=' + $('#staticmapimg').attr('width') + 'x' + $('#staticmapimg').attr('height'); 
    switch(this.value) {
      case 'Yosemite':
        centerUrl='center=37.8486397,-119.5593908';
        zoomUrl='zoom=10';
        break;
      case 'Yellowstone':
        centerUrl='center=44.3884794,-110.5526539';
        zoomUrl='zoom=9';
        break;
      case 'GrandCanyon':
        centerUrl='center=36.0600259,-112.0797528';
        zoomUrl='zoom=9';
        break;
      case 'Zion':
        centerUrl='center=37.2944544,-113.0336634';
        zoomUrl='zoom=10';
        break;
      case 'Olympic':
        centerUrl='center=47.8139504,-123.6238498';
        zoomUrl='zoom=9';
        break;
      case 'Rainer':
        centerUrl='center=46.8656554,-121.7286653';
        zoomUrl='zoom=10';
        break;
      default:
        $('#staticmapimg').attr('src', '#');
        return;
    }

    mapUrl='https://maps.googleapis.com/maps/api/staticmap?' +
      sizeUrl + '&' +
      centerUrl + '&' +
      zoomUrl + '&' +
      keyUrl;
    console.log(mapUrl);

    $('#staticmapimg').attr('src', mapUrl);
  }

  //=============================================================================

  var leafletMap = L.map('slippymapdiv');
  // add attribution
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( leafletMap );
  // set default to Seattle, WA
  leafletMap.setView([47.6018006,-122.3386613], 12);
  var marker;

  $('#latlong').submit(onLatLongSubmit);

  function onLatLongSubmit(evt) {
    var latVal = $('#input-lat').val();
    var longVal = $('#input-long').val();
    var zoomVal = $('#input-zoom').val();

    if(typeof marker !== "undefined") {
      leafletMap.removeLayer(marker);
    }
    leafletMap.setView([latVal,longVal], zoomVal);
    marker = new L.marker( [ latVal, longVal ] );
    marker.bindPopup( 'Lat: ' + latVal + ', Long: '+ longVal);
    marker.addTo( leafletMap );

    evt.preventDefault();
  }

  //=============================================================================
})();