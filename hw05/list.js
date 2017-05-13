
(function() {
'use strict';
  var people=[];

  $('#sectionForm').hide();
  $('#addPerson').on('click', onAddPerson);
  $('#formPerson').submit(onSubmitPerson);
  $('#cancelPerson').on('click', onCancelPerson);

  //=============================================================================

  function onAddPerson(evt) {
    $('#sectionForm').show();
    $('#sectionTable').hide();
    clearForm();
  }

  function onSubmitPerson(evt) {
    evt.preventDefault();
    $('#sectionForm').css('display', 'none');
    $('#sectionTable').css('display', 'initial');

    var person = new Object;
    person.name = this.name.value;
    person.address = this.address.value;
    person.email = this.email.value;

    people.push(person);
    updateTable();
  }

  function onCancelPerson(evt) {
    $('#sectionForm').css('display', 'none');
    $('#sectionTable').css('display', 'initial');
  }

  function clearForm() {
    $('#formPerson').each(function(){
      this.reset();
    });
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
      newButton = $('<button>').text('Delete');
      newTd.append(newButton);
      newTr.append(newTd);

      $('#objTableBody').append(newTr);
      });

  }

  //=============================================================================


  //=============================================================================
})();
