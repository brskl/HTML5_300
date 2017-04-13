var numbers = [];

function submit(){
  event.preventDefault();
  var newValue = Number(document.textForm.numword.value);
  if (isNaN(newValue)) {
    alert("Not a valid number");
  } else {
    numbers.push(newValue);
    updateNumFields();
  }
  document.textForm.numword.value = "";
}

function reset() {
  event.preventDefault();
  numbers = [];
  updateNumFields();
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

function init()
{
  reset();
}

window.onload = init;