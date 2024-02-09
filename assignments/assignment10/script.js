/**
 * Changing the text + changing css style + multiple styles
 * Referencing by IDs
 */
$('#ash-answer').click(() => {
    $('#ash-question').text("Ash's partner Pokemon is Pikachu!");
    $('#ash-question').css({
        'color' : 'green',
        'font-weight' : 'bold'
    });
    $('#ash-answer').text('You know the answer now!');
});

/**
 * Displaying/hiding content
 * originally the hint paragraph is hidden!
 */
let isHintShowing = false;
$('#family-hint').click(() => {
    if(isHintShowing) {
        $('#hint-para').css('display', 'none');
        isHintShowing = false;
        $('family-hint').text('Click again to hide the hint!');
    }
    else {
        $('#hint-para').css('display', 'block');
        isHintShowing = true;
    }
});

/**
 * Toggle whether the answer is showing or not
 */
 $('#family-answer').click( () => {
    $('#answer-para').toggleClass('hide');
});

/**
 * Fade in and out
 * Variable fade is if the text hasn't been faded out yet
 */
let fade = false;
$('#fade-button').click(() => {
    if(fade) {
        $('#fade-para').fadeIn(800);
        fade = false;
        $('#fade-button').text('Click again to fade out the paragraph!');
    }
    else {
        $('#fade-para').fadeOut(800);
        fade = true;
        $('#fade-button').text('Click again to fade in the paragraph!');
    }
});

/**
 * Adding/removing classes
 * variable = color and style not initially applied
 */
let colorstyle = false;
$('#color-button').click(() => {
    if(colorstyle) {
        colorstyle = false;
        $('#color-button').text('Click again to turn on the color and style again!');
        $('#color-para').removeClass('italic-blue');
    }
    else {
        colorstyle = true;
        $('#color-button').text('Click again to remove the color and style!');
        $('#color-para').addClass('italic-blue');
    }
});

/**
 * Changing attribute of an element
 */
$('#image-button').click(() => {
    $('.scenery-image').attr('src', 'scenery2.jpg');
    $('#image-button').text('There are no other scenery images left to see.');
});

/**
 * call this as soon as the page fires
 * Contains 3 interactions/widgets
 */
$(function() {
    // Dialog box that pops up, closable (not sure why the 'close' text is off the box)
    $('#dialog').dialog();
    $('#selectable').selectable();
    $('#accordion').accordion();
});

/**
 * Image animation
 * Move the image to the left a little
 */
$('#image-button2').click(() => {
    $('#fox-pic').animate({
        marginLeft: '200px',
        marginTop: '100px',
        opacity: '0.55'
    }, 1000);
});

/**
 * Using animate with multiple CSS properties
 * Callback with animate method
 */
 $('#animate-button').click(() => {
    $('.circle-div').animate({
        marginLeft : '500px',
        marginTop: '140px',
    }, 1300, function() {
        $('.circle-div').css('background-color', 'blue');
    });
});
