
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
        // https://www.google.com/maps/@37.8529771,-119.8313059,10z?hl=en
        centerUrl='center=37.8529771,-119.8313059';
        zoomUrl='zoom=10';
        break;
      case 'Yellowstone':
        // https://www.google.com/maps/@44.5844247,-111.0745171,9z?hl=en
        centerUrl='center=44.5844247,-111.0745171';
        zoomUrl='zoom=9';
        break;
      case 'GrandCanyon':
        // https://www.google.com/maps/@36.0871859,-113.9644705,8z?hl=en
        centerUrl='center=36.0871859,-113.9644705';
        zoomUrl='zoom=8';
        break;
      case 'Zion':
        //https://www.google.com/maps/@37.3217618,-113.3234313,10z?hl=en
        centerUrl='center=37.3217618,-113.3234313';
        zoomUrl='zoom=10';
        break;
      case 'Olympic':
        // https://www.google.com/maps/@47.7844309,-124.200644,9z?hl=en
        centerUrl='center=47.7844309,-124.200644';
        zoomUrl='zoom=9';
        break;
      case 'Rainer':
        // https://www.google.com/maps/@46.8597651,-121.995113,10z?hl=en
        centerUrl='center=46.8597651,-121.995113';
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