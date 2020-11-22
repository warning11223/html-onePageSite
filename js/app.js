$(function() {

    let introH = $('#intro').innerHeight(),
        header = $('#header'),
        scrollOffset = $(window).scrollTop;

                    /*header fixed*/
    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

        function checkScroll(scrollOffset) {
            if (scrollOffset >= introH) {
                header.addClass("header--fixed");
            } else {
                header.removeClass("header--fixed");
            }

        }

    });


                    /*scroll*/


    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        console.log(blockOffset)

        $('#nav a').removeClass('active');
        $this.addClass('active')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500)

    });

                /*nav__toggle*/

    $('#nav__toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');

    })


                /*collapse*/


    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $(this).data('collapse');

        $(blockId).slideToggle();
    })



        /*slider*/

    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


})