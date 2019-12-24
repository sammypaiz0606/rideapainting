

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});


$(document).ready(function() {
	$('.thumbimg').click(function() {
		$('.changeimg').attr('src', this.src);
		$('.changeimg').attr('alt', this.alt);
		$('.textcaption').text(this.alt);

	})
})