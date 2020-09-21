$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000,
        ride: 'carousel'
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true
        });
    });
})