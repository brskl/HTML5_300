
(function() {
'use strict';
  $('#dataForm').css('display', 'none');
  $('#addPerson').on('click', onAddPerson);
  $('#formPerson').submit(onSubmitPerson);


  //=============================================================================

  function onAddPerson(evt) {
    $('#dataForm').css('display', 'initial');
    $('#sectionTable').css('display', 'none');
  }

  function onSubmitPerson(evt) {
    evt.preventDefault();
    $('#dataForm').css('display', 'none');
    $('#sectionTable').css('display', 'initial');
  
  }

  //=============================================================================


  //=============================================================================
})();
