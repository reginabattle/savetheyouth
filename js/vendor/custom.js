
/* Menu Toggle
------------------------------------------------------------------*/
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});


/* Video Modals
------------------------------------------------------------------*/

// Play Vimeo video when modal is opened
jQuery(document).on('opened', '.modal-vimeo', function () {
	var iframe = jQuery( this ).find( 'iframe[src*="vimeo"]' )
	jQuery(iframe).vimeo("play");
});

// Pause Vimeo video when modal is closed
jQuery(document).on('closed', '.modal-vimeo', function (e) {
	var iframe = jQuery( this ).find( 'iframe[src*="vimeo"]' )
	jQuery(iframe).vimeo("unload");
});

