$(function () {
    $.getJSON("js/sessions.json", function (data) {
        var template = $('#session_template').html();

        //Parse it (optional, only necessary if template is to be used again)
        Mustache.parse(template);

        //Render the data into the template


        var rendered = Mustache.render(template, { data: data });

        //Overwrite the contents of #target with the rendered HTML
        $('#sessionContainer').html(rendered);
    });
});