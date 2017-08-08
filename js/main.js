$(function() {
    $.getJSON("js/sponsors.json", function (sponsors) {
   
        var template = $('#sponsor_template').html();

        //Parse it (optional, only necessary if template is to be used again)
        Mustache.parse(template);

        //Render the data into the template

        if (window.location.pathname !== '/sponsors.html') {
            sponsors = sponsors.filter(function (s) {
                return s.level === 'Gold';
            })
        }

        var rendered = Mustache.render(template, { data: sponsors });

        //Overwrite the contents of #target with the rendered HTML
        $('#sponsorContainer').html(rendered);
        $(window).trigger('resize');
    });
    
});

$(window).resize(function () {
    var winWidth = $(window).width();
    if (winWidth > 1000) {
        $("section").height($(window).height() - 100);
        $("section.sponsors").attr('style', '');
        $("section.team").attr('style', '');
        $(".slide").height($(window).height() - 100);
        $('#usa').width($('body').width() - 30)
    }
})



setInterval(function() {
    var winWidth = $(window).width();
    if (winWidth < 1000 && $("section").width() !== winWidth) {
        $("section").attr('style', '');
        $(".slide").attr('style', '');
    }
}, 250);

