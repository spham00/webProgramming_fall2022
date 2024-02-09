let slideIndex = 1;     // start at first image
showSlides(slideIndex);

// next and previous controls, n is the slide moving
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// show the current image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * slides are width 100 so they're responsive
 */
function showSlides(n) {
    // return collections
    let i;      // not initialize yet
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // if the slide # is outside the range, return to the beginning
    if (n > slides.length) {
        slideIndex = 1;
    }

    // reset for when we do the back button on the first slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // hide all image slides for the number of slides (images)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove the active class
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; // visible
    dots[slideIndex - 1].className += " active";
}

/**
 * Random reviews generator by totally real people
 * Perhaps add stars functionality later
 */
writeRandomQuote = function() {
    let quotes1 = new Array();
    let quotes2 = new Array();
    let quotes3 = new Array();

    // initializing + setting the quotes
    quotes1[0] = "This site really saves me time from having to go back and forth" +
        " with a waiter about whether a dish contains one of my allergens! - <b>Martha</b>";
    quotes1[1] = "I really can't believe this service is free. - <b>Lee</b>";
    quotes1[2] = "Wouldn't mind paying to use this website or letting them have a small" +
        " commission off my order. - <b>Jen</b>";
    let rand1 = Math.floor(Math.random()*quotes1.length);
    document.getElementById("quote1").innerHTML = quotes1[rand1];

    quotes2[0] = "I care about my gym routine, and this helps me keep on track with" +
        " my calorie intake each meal. - <b>Jim</b>";
    quotes2[1] = "I'm not using another delivery/ordering service ever again! - <b>Stella</b>";
    quotes2[2] = "Better than any other app I've ever downloaded for food. Just" +
        " suits my needs completely. - <b>Mel</b>";
    let rand2 = Math.floor(Math.random()*quotes2.length);
    document.getElementById("quote2").innerHTML = quotes2[rand2];

    quotes3[0] = "It's really easy for even me to navigate, and I'm someone who's" +
        " not really adept with technology! - <b>Walter</b>";
    quotes3[1] = "I use this everytime I go out to eat or get delivery" +
        " without exception. - <b>Pat<br/>";
    let rand3 = Math.floor(Math.random()*quotes3.length);
    document.getElementById("quote3").innerHTML = quotes3[rand3];
}
writeRandomQuote();
