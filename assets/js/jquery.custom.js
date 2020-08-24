$(document).ready(function () {
    // $('.home-slide').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 2000,
    //     autoplay: false,
    //     arrows: false,
    //     lazyLoad: 'ondemand',
    //     mobileFirst: true
    // })
    $('.carousel').carousel({
        interval: 5000,
        ride: 'carousel'
    });
})