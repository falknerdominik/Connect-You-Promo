$(document).ready(function() {

    $('a.panel').click(function () {

        $('a.panel').removeClass('selected');
        $(this).addClass('selected');

        current = $(this);

        $('#wrapper').scrollTo($(this).attr('href'), 500);

        return false;
    });

    $(window).resize(function () {
        resizePanel();
    });

});

$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 1920);
        e.preventDefault();
    });
});

function resizePanel() {

    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.item').length;

    $('#debug').html(width  + ' ' + height + ' ' + mask_width);

    $('#wrapper, .item').css({width: width, height: height});
    $('#mask').css({width: mask_width, height: height});
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}
