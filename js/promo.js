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

    setCSS();
});

$(window).resize(function(){
    setCSS();
});

function resizePanel() {

    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.item').length;

    $('#debug').html(width  + ' ' + height + ' ' + mask_width);

    $('#wrapper .item').css({'width': width, 'height': height});
    $('#mask').css({width: mask_width, height: height});
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}

function setCSS(){
    // Auslensen der Werte
    var img = $('#login_bg');
    var wrapperWidth = $('#login_bg_wrapper');

    // Berechnen
    var height = img.css('height') / 2;
    var marginTop = height /2 * -1;
    var marginLeft = wrapperWidth.css('width') / 4;
    alert();
    // Einsetzen
    $('#login_bg').css('height', height);
    $('#login_bg').css('margin-left', marginLeft);
    $('#login_bg_wrapper').css('margin-top', marginTop);
}
