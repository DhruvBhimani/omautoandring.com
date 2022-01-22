var center_content_array = ["center_content_title", "center_content_about", "center_content_eandd", "center_content_careers", "center_content_productfinder"
    /*, center_content_contact"*/
];
var current_content_position = 0;
var scroll_processing = false;


var opts = {
    lines: 7, // The number of lines to draw
    length: 0, // The length of each line
    width: 30, // The line thickness
    radius: 30, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 35, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent
    left: '50%' // Left position relative to parent
};



var lastScrollTop = 0;
$(function() {
    // var target = document.getElementById('center_content_loader');
    // var spinner = new Spinner(opts).spin(target);
    // //hide all content
    $(".center_content").css("display", "none");
    $("#center_content_title").fadeIn(900);
});

$(function() {

    $(".center_content_main").swipe({
        swipeUp: function(event, direction, distance, duration) {
            scrollDown();
        },
        swipeDown: function(event, direction, distance, duration) {
            scrollUp();
        },
        click: function(event, target) {},
        threshold: 100,
        allowPageScroll: "vertical"
    });

    $("body").on('swipedown', function() {
        scrollDown();
    });
    $("body").on('swipeup', function() {
        scrollUp();
    });

    //Page loaded & Hide Spinner
    $('#center_content_loader').hide();
    //SCROLLING
    //Firefox
    $(document).bind('DOMMouseScroll', function(e) {
        if (!scroll_processing) {
            if (e.originalEvent.detail > 0) {
                //scroll down
                scrollDown();
            } else {
                //scroll up
                scrollUp();
            }
            //prevent page fom scrolling
            return false;
        }
    });

    //IE, Opera, Safari
    $(document).bind('mousewheel', function(e) {
        if (!scroll_processing) {
            if (e.originalEvent.wheelDelta < 0) {
                //scroll down
                scrollDown();
            } else {
                //scroll up
                scrollUp();
            }
            //prevent page fom scrolling
            return false;
        }
    });

    $(".rightbar_nav_button").each(function() {
        $(this).click(function() {
            $(".selected_right_button").removeClass("selected_right_button");
            $(this).addClass("selected_right_button");
            //hide all
            $(".center_content").fadeOut(400);
            $(".center_content").children().fadeOut(400);
            //show correct div
            current_content_position = parseInt($(this).attr("id"));
            if (current_content_position === 0 || current_content_position === 2 || current_content_position === 3) {
                whiteNav();
            }
            if (current_content_position === 1 || current_content_position === 4 || current_content_position === 5) {
                blackNav();
            }
            var current_content_str = center_content_array[current_content_position];
            $("#" + current_content_str).children().fadeIn(500);
            $("#" + current_content_str).fadeIn(900);
            //cleaning up
            setTimeout(setScrollProcessingComplete, 1200);
        });
    });

    $(".center_content_downArrow").click(scrollDown);
});

function scrollDown() {
    if (current_content_position !== 4) {
        scroll_processing = true;
        if (current_content_position === 0 || current_content_position === 3) {
            //change navbar
            blackNav();
        }
        if (current_content_position === 1) {
            whiteNav();
        }
        var current_content_str = center_content_array[current_content_position];
        var next_content_str = center_content_array[current_content_position + 1];
        $("#" + current_content_str).children().fadeOut(500);
        $("#" + next_content_str).children().fadeIn(500);
        $("#" + current_content_str).hide("slide", {
            direction: "up"
        }, 1000);
        $("#" + next_content_str).fadeIn(900);
        current_content_position++;
        $(".selected_right_button").removeClass("selected_right_button");
        $("#" + current_content_position).addClass("selected_right_button");
        setTimeout(setScrollProcessingComplete, 1200);
    }
}


function scrollUp() {
    if (current_content_position !== 0) {
        scroll_processing = true;
        if (current_content_position === 1 || current_content_position === 4) {
            //change navbar
            whiteNav();
        }
        if (current_content_position === 2) {
            blackNav();
        }
        var current_content_str = center_content_array[current_content_position];
        var prev_content_str = center_content_array[current_content_position - 1];
        $("#" + current_content_str).children().fadeOut(500);
        $("#" + prev_content_str).children().fadeIn(500);
        $("#" + current_content_str).hide("slide", {
            direction: "down"
        }, 1000);;
        $("#" + prev_content_str).fadeIn(900);
        current_content_position--;
        $(".selected_right_button").removeClass("selected_right_button");
        $("#" + current_content_position).addClass("selected_right_button");
        setTimeout(setScrollProcessingComplete, 1200);
    }
}

function setScrollProcessingComplete() {
    scroll_processing = false;
}