
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

function onNumber(evt) {
  var numberVal = this.value;
  $('#number1').val(numberVal);
  $('#number2').val(numberVal);
  $('#numberValue').text(numberVal.toString());
}

function onSearch(evt) {
  var searchVal = this.value;
  $('#search1').val(searchVal);
  $('#search2').val(searchVal);
  $('#searchValue').text(searchVal.toString());
}

function onTel(evt) {
  var telValue = this.value;
  $('#tel1').val(telValue);
  $('#tel2').val(telValue);
  $('#telValue').text(telValue.toString());
}

function onEmail(evt) {
  var emailVal;

  if (this.id === 'emailForm1') {
    emailVal = $('#email1').val();
    $('#email2').val(emailVal);
  } else {
    emailVal = $('#email2').val();
    $('#email1').val(emailVal);
  }
  $('#emailValue').text(emailVal.toString());

  evt.preventDefault();
}

function onUrl(evt) {
  var urlVal;

  if (this.id === 'urlForm1') {
    urlVal = $('#url1').val();
    $('#url2').val(urlVal);
  } else {
    urlVal = $('#url2').val();
    $('#url1').val(urlVal);
  }
  $('#urlValue').text(urlVal.toString());

  evt.preventDefault();
}

function onRange(evt) {
  var rangeValue = this.value;
  $('#range1').val(rangeValue);
  $('#range2').val(rangeValue);
  $('#rangeValue').text(rangeValue.toString());
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
  $('#number1').on('change', onNumber);
  $('#number2').on('change', onNumber);
  $('#search1').on('change', onSearch);
  $('#search2').on('change', onSearch);
  $('#tel1').on('change', onTel);
  $('#tel2').on('change', onTel);
  $('#emailForm1').submit(onEmail);
  $('#emailForm2').submit(onEmail);
  $('#urlForm1').submit(onUrl);
  $('#urlForm2').submit(onUrl);
  $('#range1').on('change', onRange);
  $('#range2').on('change', onRange);
}

window.onload = init;
