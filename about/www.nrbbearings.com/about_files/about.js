var center_section_array = ["identity_section", "story_section", "team_section", "csr_section"];
var current_section_position = 0;
var current_section_id = center_section_array[0];
var scroll_processing = null;

// Div Locations
var position_array = [];



$(function() {
    blackNav();

    for (center_section in center_section_array) {
        console.log(center_section_array[center_section])
        position_array.push($("#" + center_section_array[center_section]).offset().top)
    }

    $(window).scroll(function() {
        if (!scroll_processing) {
            var scroll_position = $(window).scrollTop();
            scroll_processing = setTimeout(function() {
                clearTimeout(scroll_processing);
                scroll_processing = null;
                for (var i = 0; i < position_array.length; i++) {
                    current_section_id = center_section_array[i];
                    var next_i = i + 1;
                    if (scroll_position >= position_array[i] - 400) {
                        current_section_id = center_section_array[i];
                        $(".selected_right_button").removeClass("selected_right_button");
                        $("#" + i).addClass("selected_right_button");
                    }
                }
                if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                    $(".selected_right_button").removeClass("selected_right_button");
                    $("#" + (center_section_array.length - 1)).addClass("selected_right_button");
                }
            }, 250);
        }
    });

    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    $(".rightbar_nav_button").each(function() {
        $(this).mouseover(function() {
            this_id = parseInt($(this).attr("id"));
            createToolTip(this_id);
        }).mouseout(function() {
            $(".rightbar_nav_text").hide();
        });
        $(this).click(function() {
            current_section_position = parseInt($(this).attr("id"));
            $(".selected_right_button").removeClass("selected_right_button");
            $(this).addClass("selected_right_button");
            var current_section_id = center_section_array[current_section_position];
            jumpToSection(current_section_id);
        })
    })
})

$(window).load(function() {

});