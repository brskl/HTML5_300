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

function updateWordCount(content) {

  // count each word
  const wordCounts = {}
  if (content.length > 0) {
    const wordSequence = content.trim().split(/[^\w]+/);
    for (var i=0; i<wordSequence.length; i++) {
      var word = wordSequence[i];
      if (! Number.isInteger(wordCounts[word])) {
        wordCounts[word] = 0;
      }
      wordCounts[word] += 1;
    }
  }

  // sort words by their counts in descending order
  var words = Object.keys(wordCounts);
  var wordsSortedByCount = words.sort(function(a, b) {
    return wordCounts[b] - wordCounts[a];
  });

  var elmTableBody = document.getElementById("tableBody");
  elmTableBody.innerHTML = "";
  var newRow;
  var word;
  for (var i=0; i < wordsSortedByCount.length; i++) {
    word = wordsSortedByCount[i];
    newRow = document.createElement("tr");
    newRow.innerHTML = '<td>' + word + '</td><td>' + wordCounts[word] + '</td>';
    elmTableBody.appendChild(newRow);
  }
}

function updateWordFields() {
  var divAllWords = document.getElementById("allwords");
  
  divAllWords.innerHTML = allwords;
  updateWordCount(allwords);
}

function init()
{
  reset();
}

window.onload = init;