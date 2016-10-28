var html = [{
    topic: " HTML ",
    description: " description",
    code: " code ec"
}, {
    topic: " CSS ",
    description: " description",
    code: " code ec"
}, {
    topic: " JS ",
    description: " description",
    code: " code ec"
}, {
    topic: " Git ",
    description: " description",
    code: " code ec"
}, {
    topic: " Prepros ",
    description: " description",
    code: " code ec"
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

    $('.sidenav li').on('click', function(event) {
        event.preventDefault();
        var object = $(this).text();
        console.log(object);
        var index = $(this).index();
        console.log(index);
        var obj = html[index];

        $.each(obj, function() {
            $('.content .container').append(" <div class='card'><h4>" + obj.topic + "</h4><p>" + obj.description + "</p><pre class='code'>" + obj.code + "</pre></div>");
        });

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
