var html = [{
    "topic": " Topic",
    "description": " description",
    "code": " code ec"
}, {
    "topic": " Topic",
    "description": " description",
    "code": " code ec"
}, {
    "topic": " Topic 1",
    "description": " description",
    "code": " code ec"
}, {
    "topic": " Topic 2",
    "description": " description",
    "code": " code ec"
}, {
    "topic": " Topic 3",
    "description": " description",
    "code": " code ec"
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
