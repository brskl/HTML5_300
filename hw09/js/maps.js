
(function() {
'use strict';
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


  //=============================================================================
})();
