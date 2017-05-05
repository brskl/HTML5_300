
(function() {
'use strict';
  //=============================================================================
  $('#selectMap').on('change', onListChange);

  var googleStaticMapsApiKey = 'AIzaSyCh3xLQZF7RK22zO7n79jXtmDL0w4xmk1w';

  //<img src="https://maps.googleapis.com/maps/api/staticmap?size=600x400&center=47.6205,-122.3493&zoom=16&markers=color:yellow|47.6205,-122.3493&key=AIzaSyDU6lWXAex1uw3neucrHf9BSGRExTkwqxQ" />

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

    mapUrl='https://maps.googleapis.com/maps/api/staticmap?' + sizeUrl + '&' +
      centerUrl + '&' +
      zoomUrl + '&key' + googleStaticMapsApiKey; // TODO: get 403 if say 'key=....' instead of 'key....'  Why?
    console.log(mapUrl);

    $('#staticmapimg').attr('src', mapUrl);
  }

  //=============================================================================
})();