
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

function onMonth(evt) {
  var monthVal = this.value;
  $('#month1').prop('value', monthVal);
  $('#month2').prop('value', monthVal);
  $('#monthValue').text(monthVal.toString());
}

function onTime(evt) {
  var timeVal = this.value;
  $('#time1').prop('value', timeVal);
  $('#time2').prop('value', timeVal);
  $('#timeValue').text(timeVal.toString());
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
  $('#datetimelocal1').on('change', onDatetimelocal);
  $('#datetimelocal2').on('change', onDatetimelocal);
  $('#week1').on('change', onWeek);
  $('#week2').on('change', onWeek);
  $('#month1').on('change', onMonth);
  $('#month2').on('change', onMonth);
  $('#time1').on('change', onTime);
  $('#time2').on('change', onTime);
}

window.onload = init;
