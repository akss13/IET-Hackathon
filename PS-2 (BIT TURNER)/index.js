function readURL_d(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.doc-upload-wrap').hide();
  
        $('.file-upload-doc').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.doc-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload_d();
    }
  }
  
  function removeUpload_d() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.doc-upload-wrap').show();
  }
  $('.doc-upload-wrap').bind('dragover', function () {
          $('.doc-upload-wrap').addClass('doc-dropping');
      });
      $('.doc-upload-wrap').bind('dragleave', function () {
          $('.doc-upload-wrap').removeClass('doc-dropping');
  });
  
  function readURL_x(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.doc-upload-wrap').hide();
  
        $('.file-upload-doc').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.doc-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload_x();
    }
  }
  
  function removeUpload_x() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.doc-upload-wrap').show();
  }
  $('.doc-upload-wrap').bind('dragover', function () {
          $('.doc-upload-wrap').addClass('doc-dropping');
      });
      $('.doc-upload-wrap').bind('dragleave', function () {
          $('.doc-upload-wrap').removeClass('doc-dropping');
  });