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

var css = [{
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

var js = [{
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
    
    // If service worker is supported, then register it.
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', {
                scope: './'
            }) //To set service worker scope
            .then(function(register) {
                if (register.installing) {
                    console.log('Service worker is installing!');
                } else if (register.waiting) {
                    console.log('Service worker is waiting!');
                } else if (register.active) {
                    console.log('Service worker is active!');
                }
            })
            .catch(function(error) {
                console.log('Service worker registration failed ', error);
            });
    } else {
        console.log('Service worker is not supported.');
    }


    jQuery.each(html, function(index, val) {
        $(".content .container .main-wrap").append(" <div class='card'><h4>" + html[index].topic + "</h4><p>" + html[index].description + "</p><pre class='code'>" + html[index].code + "</pre></div>");
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

    $('.sidenav li').on('click', function(event) {
        event.preventDefault();
        var object = $(this).text();
        console.log(object, "before JSON pArse");
        JSON.parse(object);
        console.log(object);

        $.each(object, function(index, val) {
            $(".content .container").append(" <div class='card'><h4>" + object[index].topic + "</h4><p>" + object[index].description + "</p><pre class='code'>" + object[index].code + "</pre></div>");
        });

    });

});
