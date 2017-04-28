
function onCB(evt) {
  var cbVal = this.checked;
  $('#cb1').prop('checked', cbVal);
  $('#cb2').prop('checked', cbVal);
  $('#cbValue').text(cbVal.toString());
}

function onColor(evt) {
  var colorVal = this.value;
  $('#color1').val(colorVal);
  $('#color2').val(colorVal);
  $('#colorValue').text(colorVal.toString());
}

function onDate(evt) {
  var dateVal = this.value;
  $('#date1').val(dateVal);
  $('#date2').val(dateVal);
  $('#dateValue').text(dateVal.toString());
}

function onDatetimelocal(evt) {
  var datetimelocalVal = this.value;
  $('#datetimelocal1').val(datetimelocalVal);
  $('#datetimelocal2').val(datetimelocalVal);
  $('#datetimelocalValue').text(datetimelocalVal.toString());
}

function onWeek(evt) {
  var weekVal = this.value;
  $('#week1').val(weekVal);
  $('#week2').val(weekVal);
  $('#weekValue').text(weekVal.toString());
}

function onMonth(evt) {
  var monthVal = this.value;
  $('#month1').val(monthVal);
  $('#month2').val(monthVal);
  $('#monthValue').text(monthVal.toString());
}

function onTime(evt) {
  var timeVal = this.value;
  $('#time1').val(timeVal);
  $('#time2').val(timeVal);
  $('#timeValue').text(timeVal.toString());
}

function onText(evt) {
  var textVal = this.value;
  $('#text1').val(textVal);
  $('#text2').val(textVal);
  $('#textValue').text(textVal.toString());
}

function onPassword(evt) {
  var passwordVal = this.value;
  $('#password1').val(passwordVal);
  $('#password2').val(passwordVal);
  $('#passwordValue').text(passwordVal.toString());
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
  $('#text1').on('change', onText);
  $('#text2').on('change', onText);
  $('#password1').on('change', onPassword);
  $('#password2').on('change', onPassword);
}

window.onload = init;
