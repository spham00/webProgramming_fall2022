/**
 * jQuery
 * id = #name
 * class = .name
 * element type (i.e. 'p' tag)
 * 
 * if you change the class to an id, just change '.' to '#'
 * and vice versa
 */
$('#my-button').click(function() {
    console.log('button clicked...');
});

$('.the-button').click( () => {
    // let's grab the paragraph
    $('p').text('Rowan University is the #1 university in America');
});

$('.darth-vader-text').click( () => {
    $('.darth-vader-button').text('The Emperor!');
});

/**
 * Changing CSS style stuff of things
 * jQuery stuff has a .css method, when clicking it'll add that style
 * to that element
 * format = .css('property', 'value')
 */
$('.the-color-button').click( () => {
    // $('.the-text').css('color', 'blue');
    // $('.the-text').css('font-size', '30px');

    // you can also use key value pairs
    $('.the-text').css({
        'color': 'blue',
        'font-size' : '30px'
    });
});

/**
 * Hiding and displaying content using jQuery
 * Fade in and out in the comments
 */
$('.hide-button').click(() => {
    $('.contact-form').css('display', 'none');

    // $('.contact-form').fadeOut();
    // for slow fade outs or millisecond fadeouts
    // $('.contact-form').fadeOut('slow');
});

$('.show-button').click(() => {
    $('.contact-form').css('display', 'block');

    // $('.contact-form').fadeIn();
    // $('.contact-form').fadeIn(2300);    // fading in 2300 milliseconds
});

/**
 * more visibility ig
 */
// let isFormShowing = true;
// $('#toggle-button').click(()=> {
//     if(isFormShowing) {
//         // hide
//         $('.contact-form').fadeOut(2300);
//         isFormShowing = false;
//     }
//     else {
//         // show
//         $('.contact-form').fadeIn(2300);
//         isFormShowing = true;
//     }
// })

// The ToggleClass built in method
$('#toggle-button').click( () => {
    // geta reference to contact form
    // to toggle a class ON and OFF
    // the class is defined in stylesheet
    $('#contact-form').toggleClass('hide');
});

/** 
 * add/remove class method
 * toggle is on and off, but this can add a class to classList
*/
$('#add-class').click(() => {
    $('p').addClass('blue-class');
});

$('#remove-class').click(() => {
    $('p').removeClass('blue-class');
});

/**
 * changing attributes of an element
 * in this case, it's an image
 * attribute here is source (src)
 */
$('#change-button').click(() => {
    $('.city-image').attr('src', 'rio.jpg');
});

/**
 * jQuery animation
 */
$('#animate-button').click(() => {
    // .animate({css params}, speed)
    // there can be multiple css properties
    $('.circle-div').animate({
        marginLeft : '600px',
        marginTop: '120px',
        height: '150px',
        width: '150px',
        // non-numeric stuff don't work so well in this, so put in callback
        // anon function, this is a callback
        // the color change goes last though (maybe put in quotes so it works??)
    }, 1300, function() {
        $('.circle-div').css('background-color', 'purple');
    });
});

/**
 * jQuery hover method
 */
$('.city-image').hover(() => {
    $('.city-image').animate({
        width: '600px',
        height: '600px',
        opacity: '0.55'
    }, 2000, () => {
        // this code executes after animation has completed
        // $('.city-image').css({
        //     width: '200px',
        //     height: '200px',
        //     opacity: '1.0'
        // })
        // you can put an animation INSIDE of an animation
        $('.city-image').animate({
            width: '400px',
            height: '300px',
            opacity: '1.00'
        }, 1600)
    })
});

/**
 * calling this as soon as we fire the page
 */
$(function() {
    /**
     * draggable, droppable, sortable
     */
    // $('#draggable').draggable();
    // // takes a callback function or some params
    // $('#droppable').droppable({
    //     drop: function(event, ui) {
    //         $(this).addClass("ui-stage-highlight").find("p").html("Dropped!");
    //         // add class to droppable, then find
    //         // the paragraph and change html text to dropped
    //     }
    // });
    // $('#sortable').sortable();
    // $('#sortable').disableSelection();

    /**
     * accordian
     */
    $('#accordion').accordion();
});
