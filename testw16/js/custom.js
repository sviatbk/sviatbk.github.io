document.addEventListener("DOMContentLoaded", () => {

    $('.js-goods-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    // centerPadding: '30px',
                    variableWidth: true
                }
            }
        ]

    });

    $('.js-custom-select').niceSelect();


    $(".js-burger-menu").on("click", function () {
        $(this).toggleClass("active");
        $(".js-mobile-menu").fadeToggle(200).toggleClass("opened");
        $("html, body").toggleClass("menu-opened")
    })
    $(".js-sidebar-btn").on("click", function () {
        $(this).toggleClass("active");
        $(".js-sidebar-content").slideToggle(200);
    })
    $(".js-mobile-seach").on("click", function () {
        $(this).toggleClass("active");
        $(".js-desctop-search").slideToggle(200);
    })


    // slideToggle
});