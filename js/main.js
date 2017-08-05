$(function() {
   
    var sponsors = [
        {
            level: 'Golden',
            companies: [
                {
                    company: 'The SSI Group',
                    url: 'http://thessigroup.com/',
                    logo: 'gold.jpg'
                },
                {
                    company: 'Gateway Sourcing',
                    url: 'http://www.gatewaysourcing.com/',
                    logo: 'gold.jpg'
                },
                {
                    company: 'Pilot Catastrophe',
                    url: 'https://www.pilotcat.com/',
                    logo: 'gold.jpg'
                },
                {
                    company: 'Bit-Wizards',
                    url: 'https://bitwizards.com/',
                    logo: 'gold.jpg'
                }
            ]

        },
        {
            level: 'Garnet',
            companies: [
                {

                    company: 'Spring Hill College',
                    url: 'http://www.shc.edu/',
                    logo: 'garnet.jpg'
                },
                {
                    company: 'Rural Sourcing Inc.',
                    url: 'https://www.ruralsourcing.com/',
                    logo: 'rsi.jpg'
                }
            ]
        }
        
    ]

    var template = $('#sponsor_template').html();

    //Parse it (optional, only necessary if template is to be used again)
    Mustache.parse(template);

    //Render the data into the template
    var rendered = Mustache.render(template, { data: sponsors });

    //Overwrite the contents of #target with the rendered HTML
    $('#sponsorContainer').html(rendered);
    $(window).trigger('resize');
    
});

$(window).resize(function () {
    var winWidth = $(window).width();
    if (winWidth > 1000) {
        $("section").height($(window).height() - 100);
        $("section.sponsors").attr('style', '');
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

