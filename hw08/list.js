
(function() {
'use strict';
  var people=[];
  var isEdit;
  var indexEdit;

  var BASE_URL = 'https://pacific-meadow-64112.herokuapp.com/data-api/';
  var collection = 'bsklar';

  var tableTemplate = Handlebars.compile( $('#tableTemplate').html() );
  var formPersonTemplate = Handlebars.compile( $('#formPersonTemplate').html());


  getPeople();

  function showTable() {
    var data = { peopleData : people };
    var html = tableTemplate( data );
    $('#mainDiv').html( html );
  }

  function showPersonAddForm() {
    var data = { isEdit: false }
    var html = formPersonTemplate(data);
    $('#mainDiv').html(html);
  }

  function showPersonEditForm(personIdVal) {
    var personFound = findPerson(personIdVal);
    var data = { isEdit: true, personId: personIdVal, personVal : personFound }
    var html = formPersonTemplate(data);
    $('#mainDiv').html(html);
  }

  $.myOnDelete = function (personId) {
    console.log("Deleting: " + personId);
    deletePerson(personId);
  }

  $.myOnAddPerson = function () {
    console.log("Button Add Person pressed");
    showPersonAddForm();
  }

  $.myOnCancel = function () {
    console.log('Cancel button pressed');
    showTable();
  }

  $.myOnEdit = function(personId) {
    console.log("Editing " + personId);
    showPersonEditForm(personId);
  }

  $.myOnSubmitAdd = function(evt) {
    console.log('Submit (add) button pressed');
    evt.preventDefault();
    var formPerson = $('form#formPerson')[0];
    var person = new Object;
    person.name = formPerson.name.value;
    person.address = formPerson.address.value;
    person.email = formPerson.email.value;
    createPerson(person);
  }

  $.myOnSubmitEdit = function(evt, personId) {
    console.log('Submit (edit) button pressed for ' + personId);
    evt.preventDefault();
    var formPerson = $('form#formPerson')[0];

    // TODO: Remove
    showTable();
  }

  function findPerson(personId) {
    for (let person of people) {
      if (person._id === personId) {
        return person;
      }
    }

    return null;
  }

  //=============================================================================


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

  function getSuccessHandler(response) {
    people = response;
    showTable();
  }

  function getPeople() {
    $.ajax(BASE_URL + collection,
    {
        method: 'GET',
        success: getSuccessHandler,
        error: reportAjaxError
    } );
  }

  function deleteSuccessHandler(response) {
    getPeople();
    showTable();
  }

  function deletePerson(personId) {
    $.ajax( BASE_URL + collection + '/' + personId,
    {
        method: 'DELETE',
        success: deleteSuccessHandler,
        error: reportAjaxError
    } );
  }

  function createSuccessHandler(response) {
    getPeople();
    showTable();
  }

  function createPerson(person) {
    $.ajax( BASE_URL + collection,
    {
        method: 'POST',
        data: person,
        success: createSuccessHandler,
        error: reportAjaxError
    } );
  }

  //=============================================================================


  //=============================================================================
})();
