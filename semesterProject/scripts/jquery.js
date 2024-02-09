$(function() {
    $("#menu").menu({
        items: "> :not(.ui-widget-header)"
    });
});

// $(function() {
//     $(".clickable-row").click(function() {
//         window.location = $(this).data("href");
//     });
// });

// $(function() {
//     $("#accordion").accordion();
// });

// wiring up button on homepage
$('#home-order').click(function() {
    window.location='http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/order.html';
});
