(function($) {
    $('.internal-link').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 55
        }, 400)
    });
})(jQuery);