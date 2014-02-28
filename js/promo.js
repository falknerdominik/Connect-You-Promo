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

function setHeight() {
	var img = document.getElementById("login_bg");
	var height = img.height / 2;
	var marginTop = height / 2 * -1;
	var wrapperWidth = document.getElementById("login_bg_wrapper");
	var marginLeft = wrapperWidth.width / 4;
	document.getElementById("login_bg_wrapper").style.height = height;
	document.getElementById("login_bg").style.marginTop = marginTop;
	document.getElementById("login_bg").style.marginLeft = marginLeft;
}
window.onload = setHeight;
window.onresize = setHeight;
