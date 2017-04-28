
function onCB(evt) {
  var cbVal = this.checked;
  $('#cb1').prop('checked', cbVal);
  $('#cb2').prop('checked', cbVal);
  $('#cbValue').text(cbVal.toString());
}

function init()
{
  $('#cb1').on( 'click', onCB );
  $('#cb2').on( 'click', onCB );
  $('#cbValue').text($('#cb1').prop('checked').toString());
}

window.onload = init;