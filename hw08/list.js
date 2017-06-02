
(function() {
'use strict';
  var people=[];
  var isEdit;
  var indexEdit;

  var BASE_URL = 'https://pacific-meadow-64112.herokuapp.com/data-api/';
  var collection = 'bsklar';

  $('#sectionForm').hide();
  $('#addPerson').on('click', onAddPerson);
  $('#formPerson').submit(onSubmitPerson);
  $('#cancelPerson').on('click', onCancelPerson);

  getPeople();
  updateTable();

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
      updatePerson(people[indexEdit]);
    } else {
      var person = new Object;
      person.name = this.name.value;
      person.address = this.address.value;
      person.email = this.email.value;
      people.push(person);
      createPerson(person);
    }

    updateTable();
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
        deletePerson(people[i]);
        people.splice(i,1);
        updateTable();
      });
      newTd.append(newButton);
      newTr.append(newTd);

      $('#objTableBody').append(newTr);
      });

  }

  // copied from REST test
  function reportAjaxError( jqXHR, textStatus, errorThrown ) {
    var msg = 'AJAX error.\n' +
        'Status Code: ' + jqXHR.status + '\n' +
        'Status: ' + textStatus;
    if ( errorThrown ) {
        msg += '\n' + 'Error thrown: ' + errorThrown;
    }
    if ( jqXHR.responseText ) {
        msg += '\n' + 'Response text: ' + jqXHR.responseText;
    }
    console.log(msg);
  }

  function getResponseHandler(response) {
    people = response;
    updateTable();
  }

  function postResponseHandler(response) {
    // add _id to last person which will be the one just created.
    people[people.length - 1]._id = response.created;
  }

  function deletePerson(person) {
    $.ajax( BASE_URL + collection + '/' + person._id,
    {
        method: 'DELETE',
        success: null,
        error: reportAjaxError
    } );
  }

  function createPerson(person) {
    $.ajax( BASE_URL + collection,
    {
        method: 'POST',
        data: person,
        success: postResponseHandler,
        error: reportAjaxError
    } );
  }

  function updatePerson(person) {
    var personData = {
      name: person.name,
      address: person.address,
      email: person.email
    };
    $.ajax( BASE_URL + collection + '/' + person._id,
    {
        method: 'PUT',
        data: personData,
        success: null,
        error: reportAjaxError
    } );
  }

  function getPeople() {
    $.ajax(BASE_URL + collection,
    {
        method: 'GET',
        success: getResponseHandler,
        error: reportAjaxError
    } );
  }

  //=============================================================================


  //=============================================================================
})();
