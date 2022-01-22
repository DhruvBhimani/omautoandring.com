var center_section_array = ["our_engineers", "our_design_center", "our_expertise", "case_studies"];
var current_section_position = 0;
var current_section_id = center_section_array[0];
var scroll_processing = null;

// Div Locations
var position_array = [];



$(function() {
    blackNav();

    for (center_section in center_section_array) {
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

    $("#case1").click(function() {
        $("#case_title").html("Cageless Bearing");
        $("#case_text").html("Conventional wisdom once dictated that roller bearings consisted of three elements: the shell, the rollers, and the cage.<br><br>The cage presented an issue when a major truck manufacturer approached NRB with a problem. Their truck bearings were suffering repreated failure in the backside and differential. The bearings had brass cages, which were breaking again and again under large amounts of load. They aked NRB to develop a bearing for them that could withstand the load.<br><br>Faced with this problem, our engineers revolutionised the design of roller bearings by simply taking out the cage. Instead, we developed a cageless bearing, composed of only rollers and a shell. This groundbreaking design was able to circumvent the backside and differential issues, completely eliminating the occurence of bearing failure in our customers' trucks.<br><br>Today, cageless bearings are commonly produced, not only by NRB but also by our competitors.")
        $("#blackout").fadeIn(600);
    })

    $("#case2").click(function() {
        $("#case_title").html("Lightweight Drawn Cup Bearings");
        $("#case_text").html("Our differentiator is the ability to create value through innovative design, leveraging technology to optimize cost and performance.<br><br>This year we attempted to provide a unique light-weight bearing solution. We created a new drawn cup solution to replace a conventional solid, heavier cylindrical bearing for the balancer shaft application. This breakthrough design led to a substantial weight reduction in the engine of an exciting new crossover Sedan-SUV model, which is to be launched by a global auto manufacturer.<br><br>Our advanced technology R&D centre has been the key facilitator in the development of this innovative, breakthrough technology.")
        $("#blackout").fadeIn(600);
    })

    $("#case3").click(function() {
        $("#case_title").html("Designing Under Deadlines");
        $("#case_text").html("In 2005 NRB was approached by a customer who urgently needed a new, drastically improved bearing. This customer had a flagship product with a critical bearing that was failing regularly and producing too much noise. The bearing was ranked “severity 10,” meaning a failure in the bearing would immediately threaten the lives of its passengers. The customer asked NRB to develop a new bearing within three weeks.<br><br>Confronted with a tremendous task, our team embraced the challenge and set out to prove that NRB was capable of solving this problem. Our engineers set themselves apart not only through innovative design, but also through determination and endurance testing. <br><br>In 20 days, NRB delivered a sample to the customer of a bearing which not only eliminated the noise issue, but outperformed the failed bearing by over 300% in life. ")
        $("#blackout").fadeIn(600);
    })

    $("#case_close").click(function() {
        $("#blackout").fadeOut(600);
    })
})