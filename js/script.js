var html = [{
    "topic": "Mast Topic",
    "description": "Mast description",
    "code": "mast code ec"
}, {
    "topic": "Mast Topic",
    "description": "Mast description",
    "code": "mast code ec"
}, {
    "topic": "Mast Topic 1",
    "description": "Mast description",
    "code": "mast code ec"
}, {
    "topic": "Mast Topic 2",
    "description": "Mast description",
    "code": "mast code ec"
}, {
    "topic": "Mast Topic 3",
    "description": "Mast description",
    "code": "mast code ec"
}];

$(document).ready(function() {

    jQuery.each(html, function(index, val) {
      $(".content .container").append(" <div class='card'><h4>" + html[index].topic + "</h4><p>" + html[index].description + "</p><pre class='code'>" + html[index].code + "</pre></div>");
    });

    // Calling for sidenav
    $('.hamburger-icon').on('click', function(event) {
        event.preventDefault();
        $('.sidenav').toggleClass('active');
        $('.hamburger-icon').toggleClass('active');
    });

    // Inactivating the side nav when clicked out of it.
    $('.foreground').on('click', function(event) {
        event.preventDefault();
        $('.sidenav').removeClass('active');
        $('.hamburger-icon').removeClass('active');
    });

});
