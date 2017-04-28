
function onCB(evt) {
  var cbVal = this.checked;
  $('#cb1').prop('checked', cbVal);
  $('#cb2').prop('checked', cbVal);
  $('#cbValue').text(cbVal.toString());
}

function onColor(evt) {
  var colorVal = this.value;
  $('#color1').prop('value', colorVal);
  $('#color2').prop('value', colorVal);
  $('#colorValue').text(colorVal.toString());
}

function onDate(evt) {
  var dateVal = this.value;
  $('#date1').prop('value', dateVal);
  $('#date2').prop('value', dateVal);
  $('#dateValue').text(dateVal.toString());
}

function onDatetimelocal(evt) {
  var datetimelocalVal = this.value;
  $('#datetimelocal1').prop('value', datetimelocalVal);
  $('#datetimelocal2').prop('value', datetimelocalVal);
  $('#datetimelocalValue').text(datetimelocalVal.toString());
}

function onWeek(evt) {
  var weekVal = this.value;
  $('#week1').prop('value', weekVal);
  $('#week2').prop('value', weekVal);
  $('#weekValue').text(weekVal.toString());
}

function init()
{
  $('#cb1').on('click', onCB);
  $('#cb2').on('click', onCB);
  $('#cbValue').text($('#cb1').prop('checked').toString());
  $('#color1').on('change', onColor);
  $('#color2').on('change', onColor);
  $('#colorValue').text($('#color1').prop('value').toString());
  $('#date1').on('change', onDate);
  $('#date2').on('change', onDate);
  $('#dateValue').text($('#date1').prop('value').toString());
  $('#datetimelocal1').on('change', onDatetimelocal);
  $('#datetimelocal2').on('change', onDatetimelocal);
  $('#datetimelocalValue').text($('#datetimelocal1').prop('value').toString());
  $('#week1').on('change', onWeek);
  $('#week2').on('change', onWeek);
  $('#weekValue').text($('week1').prop('value').toString());
}

window.onload = init;
