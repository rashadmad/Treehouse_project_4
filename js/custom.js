$(document).ready(function() {
  //lightGallery plugin
    $("#lightgallery").lightGallery({
      escKey: true,
      showThumbByDefault: false
  });
  $(function() {
  //fastLiveFilter plugin
    $('#search_input').fastLiveFilter('#lightgallery');
  });
});
