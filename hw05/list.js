
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

  //=============================================================================


  //=============================================================================
})();
