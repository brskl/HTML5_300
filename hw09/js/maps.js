
(function() {
'use strict';
  //=============================================================================

  var leafletMap = L.map('slippymapdiv');
  var lat=48.0942339;
  var long=-122.1901764;
  // add attribution
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( leafletMap );
  // set default to Seattle, WA
  leafletMap.setView([lat,long], 12);
  var marker;
  marker = new L.marker( [ lat, long ] );
  marker.bindPopup('Winter Warehouse');
  marker.addTo( leafletMap );


  //=============================================================================
})();
