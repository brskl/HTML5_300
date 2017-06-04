
(function() {
'use strict';
  var people=[];
  var isEdit;
  var indexEdit;

  var BASE_URL = 'https://pacific-meadow-64112.herokuapp.com/data-api/';
  var collection = 'bsklar';

  var tableTemplate = Handlebars.compile( $('#tableTemplate').html() );


  getPeople();

  function showTable() {
    var data = { peopleData : people };
    var html = tableTemplate( data );
    $('#mainDiv').html( html );
  }

  $.myOnDelete = function (personId) {
    console.log("Deleting: " + personId);
    deletePerson(personId);
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

  //=============================================================================


  //=============================================================================
})();
