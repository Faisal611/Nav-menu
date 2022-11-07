(function ($) {
    $(document).ready (function (){
        "use strict";

        $('.menu-toggle').click(function (){
            $('.site-nav').toggleClass('site-nav--open');
            $(this).toggleClass('open');

        })


    });
})(jQuery)