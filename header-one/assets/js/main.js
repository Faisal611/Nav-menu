(function ($) {
    $(document).ready (function (){

        "use strict"
        $('.menu-toggle').click(function () {
            $('.site-nav').toggleClass('site-nav--open',500);
            $(this).toggleClass('open')

        })

    });
})(jQuery);
