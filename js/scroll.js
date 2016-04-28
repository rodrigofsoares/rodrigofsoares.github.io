/**
 * Created by Joao Lucas on 22/02/2016.
 */

//
//*******************
//ESTUDAR O CODIGO
//******************
$(document).ready(function() {

    // Dock the header to the top of the window when scrolled past the banner.
    // This is the default behavior.

    $('#fixo').scrollToFixed();
});

//    // Dock the footer to the bottom of the page, but scroll up to reveal more
//    // content if the page is scrolled far enough.
//
//    $('.#fim').scrollToFixed( {
//        bottom: 0,
//        limit: $('.#fim').offset().top
//    });
//
//
//    // Dock each summary as it arrives just below the docked header, pushing the
//    // previous summary up the page.
//
//    var summaries = $('.summary');
//    summaries.each(function(i) {
//        var summary = $(summaries[i]);
//        var next = summaries[i + 1];
//
//        summary.scrollToFixed({
//            marginTop: $('.header').outerHeight(true) + 10,
//            limit: function() {
//                var limit = 0;
//                if (next) {
//                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
//                } else {
//                    limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
//                }
//                return limit;
//            },
//            zIndex: 999
//        });
//    });
//});
