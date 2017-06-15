$(function() {
    $(window).trigger('resize');

});

$(window).resize(function() {
    $("section").height($(window).height() - 100);
    $(".slide").height($(window).height() - 100);
    $('#usa').width($('body').width() - 30)
})

setInterval(function() {
    var winWidth = $(window).width();
    if (winWidth < 1000 && $("section").width()!==winWidth) {
        $("section").height('auto')
        $(".slide").height('auto')
    }
}, 250);