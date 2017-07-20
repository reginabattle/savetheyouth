
/* Menu Toggle
------------------------------------------------------------------*/
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});


/* Downfall Video
------------------------------------------------------------------*/
$(document).on('opened', '.modal-downfall', function () {
  $("#video-downfall").vimeo("play");
});


$(document).on('closed', '.modal-downfall', function (e) {
  $("#video-downfall").vimeo("unload");
});


/* Residuum Video
------------------------------------------------------------------*/
$(document).on('opened', '.modal-residuum', function () {
  $("#video-residuum").vimeo("play");
});

$(document).on('closed', '.modal-residuum', function (e) {
  $("#video-residuum").vimeo("unload");
});


/*  Remnants Video
------------------------------------------------------------------*/
$(document).on('opened', '.modal-remnants', function () {
  $("#video-remnants").vimeo("play");
});


$(document).on('closed', '.modal-remnants', function (e) {
  $("#video-remnants").vimeo("unload");
});