
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
    $('#sectionTable').hide();;
  }

  function onSubmitPerson(evt) {
    evt.preventDefault();
    $('#sectionForm').css('display', 'none');
    $('#sectionTable').css('display', 'initial');
  
  }

  function onCancelPerson(evt) {
    $('#sectionForm').css('display', 'none');
    $('#sectionTable').css('display', 'initial');
  }

  //=============================================================================


  //=============================================================================
})();
