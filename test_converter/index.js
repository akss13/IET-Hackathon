function readURL_1(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-doc').attr('src', e.target.result);
        $('.file-upload-content-1').show();
        $('.submit-when-uploaded-1').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload_1();
    }
  }
  
  function removeUpload_1() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content-1').hide();
    $('.submit-when-uploaded-1').hide();
    $('.image-upload-wrap').show();
  
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('doc-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('doc-dropping');
  });
  
  function executeOperation() {
    window.alert("Sent successfully");
  }
}

function readURL_2(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-doc').attr('src', e.target.result);
      $('.file-upload-content-1').show();
      $('.submit-when-uploaded-1').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload_2();
  }
}

function removeUpload_2() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content-1').hide();
  $('.submit-when-uploaded-1').hide();
  $('.image-upload-wrap').show();

$('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('doc-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('doc-dropping');
});

function executeOperation() {
  window.alert("Sent successfully");
}
}

