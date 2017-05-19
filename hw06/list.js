
(function() {
'use strict';
  var people=[];
  var isEdit;
  var indexEdit;

  $('#sectionForm').hide();
  $('#addPerson').on('click', onAddPerson);
  $('#formPerson').submit(onSubmitPerson);
  $('#cancelPerson').on('click', onCancelPerson);
  loadPeople();

  //=============================================================================

  function onAddPerson(evt) {
    $('#sectionForm').show();
    $('#sectionTable').hide();
    clearForm();
    isEdit = false;
  }

  function onSubmitPerson(evt) {
    evt.preventDefault();
    $('#sectionForm').hide();
    $('#sectionTable').show();

    if (isEdit) {
      people[indexEdit].name = this.name.value;
      people[indexEdit].address = this.address.value;
      people[indexEdit].email = this.email.value;
    } else {
      var person = new Object;
      person.name = this.name.value;
      person.address = this.address.value;
      person.email = this.email.value;
      people.push(person);
    }

    updateTable();
    savePeople();
  }

  function onCancelPerson(evt) {
    $('#sectionForm').hide();
    $('#sectionTable').show();
  }

  function clearForm() {
    $('#formPerson').each(function(){
      this.reset();
    });
  }

  function editPerson(i) {
    isEdit = true;
    indexEdit = i;
    $('#sectionForm').show();
    $('#sectionTable').hide();
    var personForm = $('#formPerson')[0];
    personForm.name.value = people[i].name;
    personForm.address.value = people[i].address;
    personForm.email.value = people[i].email;
  }

  function updateTable() {
    var newTr, newTd, newButton;
    $('#objTableBody').empty();
    people.forEach( function(obj, i) {
      newTr = $('<tr>');

      newTd = $('<td>');
      newTd.text(obj.name);
      newTr.append(newTd);
      newTd = $('<td>');
      newTd.text(obj.address);
      newTr.append(newTd);
      newTd = $('<td>');
      newTd.text(obj.email);
      newTr.append(newTd);
      newTd = $('<td>');
      newButton = $('<button>').text('Edit');
      newButton.click(function() {
        editPerson(i);
      });
      newTd.append(newButton);
      newButton = $('<button>').text('Delete');
      newButton.click(function() {
        people.splice(i,1);
        updateTable();
        savePeople();
      });
      newTd.append(newButton);
      newTr.append(newTd);

      $('#objTableBody').append(newTr);
      });

  }

  // save array People to localstorage
  function savePeople() {
    if (!Modernizr.localstorage) {
      return;
    }

    if (people.length == 0) {
      localStorage.removeItem("people")
    } else {
      localStorage["people"] = JSON.stringify(people);
    }
  }

  // load the people information from localstorage
  function loadPeople() {
    if (!Modernizr.localstorage) {
      return;
    }

    var peopleStorage = localStorage["people"];

    if (peopleStorage) {
      people = JSON.parse(peopleStorage);
    } else {
      people = [];
    }

    updateTable();
  }

  //=============================================================================


  //=============================================================================
})();
