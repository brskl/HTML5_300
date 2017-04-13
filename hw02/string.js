var numbers = [];
var allwords;

function submit(){
  event.preventDefault();
  var newInput = document.textForm.numword.value;
  var newValue = Number(newInput);
  if (isNaN(newValue)) {
    allwords = allwords.concat(newInput.trim()).concat(" ");
    updateWordFields();
  } else {
    numbers.push(newValue);
    updateNumFields();
  }
  document.textForm.numword.value = "";
}

function reset() {
  event.preventDefault();
  numbers = [];
  allwords = "";
  updateNumFields();
  updateWordFields();
}

function updateNumFields()
{
  var divCount = document.getElementById("count");
  divCount.innerHTML = "Count: " + numbers.length;
  var divSum = document.getElementById("sum");
  var divAvg = document.getElementById("average")
  if (numbers.length == 0) {
    divSum.innerHTML = "Sum: 0";
    divAvg.innerHTML = "Average: 0";
  } else {
    var total = 0;
    var value;
    for (value of numbers) {
      total += value;
    }
    divSum.innerHTML = "Sum: " + total;
    divAvg.innerHTML = "Average: " + (total / numbers.length);
  }
}

function updateWordFields() {
  var divAllWords = document.getElementById("allwords");
  
  divAllWords.innerHTML = allwords;
}

function init()
{
  reset();
}

window.onload = init;