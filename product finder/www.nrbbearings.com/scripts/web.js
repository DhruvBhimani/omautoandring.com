nav_color = "white";
is_mobile = "";
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navOpen = false;

var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


$(function() {



    // window.mobileAndTabletcheck = function() {
    // 	var check = false;
    // 	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    // 	return check;
    // }

    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    /*	if (jQuery.browser.mobile){
    		hideLeftMenu();
    		is_mobile = true;
    		$("#content_wrapper").css("margin-left", "0px");
    		$("#content_wrapper").css("margin-top", "100px");
    		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    			$(this).toggleClass('open');
    			if (navOpen){
    				// close nav
    				$('#mobile_header_nav_wrap').css("display", "none");
    				navOpen = false;
    			}else{
    				// open nav
    				$('#mobile_header_nav_wrap').css("display", "block");
    				navOpen = true;
    			}
    		});
    	}else{
    		$('header').hide();
    	}*/


    $("#logo_wrapper").click(function() {
        window.location = '../../../home/www.nrbbearings.com/index.html';
    });

    $("#nav_li_home").click(function() {
        window.location = '../../../home/www.nrbbearings.com/index.html';
    })

    $("#nav_li_home").click(function() {
        window.location = '../../../home/www.nrbbearings.com/index.html';
    })
    $("#nav_li_about").click(function() {
        window.location = '../../../about/www.nrbbearings.com/about.htm';
    })

    $("#nav_li_eandd").click(function() {
        window.location = '../../../eng nd design/www.nrbbearings.com/eandd.htm';
    })

    $("#nav_li_productfinder").click(function() {
        window.location = '../../../product finder/www.nrbbearings.com/productfinder.htm';
    })

    // $("#nav_li_investorrelations").click(function() {
    //     window.location = './investorrelations.htm';
    // })

    $("#nav_li_media").click(function() {
        window.location = '../../../media/www.nrbbearings.com/media-2019.html';
    })

    $("#nav_li_careers").click(function() {
        window.location = '../../../media/www.nrbbearings.com/scripts/careers.js';
    })

    // $("#nav_li_csr").click(function() {
    //     window.location = './csr-projects.html';
    // })

    $("#nav_li_blog").click(function() {
        window.location = 'https://www.nrbbearings.com/blog/index.html';
    })

    $("#nav_li_contact").click(function() {
        window.location = '../../../contact/www.nrbbearings.com/contact.htm';
    })



    $(".nav_li#nav_li_homenav").click(function() {
        window.location = '../../../home/www.nrbbearings.com/index.html';
    })

    $(".nav_li#nav_li_about").click(function() {
        window.location = '../../../about/www.nrbbearings.com/about.htm';
    })

    $(".nav_li#nav_li_eandd").click(function() {
        window.location = '../../../eng nd design/www.nrbbearings.com/eandd.htm';
    })

    $(".nav_li#nav_li_productfinder").click(function() {
        window.location = '../../../product finder/www.nrbbearings.com/productfinder.htm';
    })

    // $(".nav_li#nav_li_investorrelations").click(function() {
    //     window.location = './investorrelations.htm';
    // })

    $(".nav_li#nav_li_media").click(function() {
        window.location = '../../../media/www.nrbbearings.com/media-2019.html';
    })


    $(".nav_li#nav_li_careers").click(function() {
        window.location = '../../../media/www.nrbbearings.com/scripts/careers.js';
    })

    // $(".nav_li#nav_li_csr").click(function() {
    //     window.location = './csr-projects.html';
    // })

    $(".nav_li#nav_li_blog").click(function() {
        window.location = 'https://www.nrbbearings.com/blog/index.html';
    })


    $(".nav_li#nav_li_contact").click(function() {
        window.location = '../../../contact/www.nrbbearings.com/contact.htm';
    })

    // var password = window.prompt("Password:","password");
    // if (password !== "davidlee"){
    // 	console.log("jfkd");
    // 	$("body").html("UNDER CONSTRUCTION");
    // 	return;
    // }
})

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && !navOpen) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

function hideLeftMenu() {
    $(".leftbar_nav").hide(0);
    $(".leftbar_nav_blackdrop").hide(0)
    $(".center_content_main").css('margin-left', '0px');
}

function showLeftMenu() {
    $(".leftbar_nav").show(0);
    $(".leftbar_nav_blackdrop").show(0);
    $(".center_content_main").css('margin-left', '220px');
}

function whiteNav() {
    nav_color = "white";
    $("#logo_w").attr("id", "logo_b");
    $(".nav_li_text").css("color", "#303030");
    $(".leftbar_nav_blackdrop").fadeOut(300);
}

function blackNav() {
    nav_color = "black";
    $("#logo_b").attr("id", "logo_w");
    $(".nav_li_text").css("color", "#bababa");
    if (!is_mobile) {
        $(".leftbar_nav_blackdrop").fadeIn(300);
    }
}

function jumpToSection(div_obj_id) {
    $('html, body').animate({
        scrollTop: $('#' + div_obj_id).position().top
    }, 'slow');
}

// Generate Jump Box
function createToolTip(div_obj_id) {
    //delete old tooltip
    if ($("#tooltip_" + div_obj_id).css("display") === "none") {
        $("#tooltip_" + div_obj_id).fadeIn(300).css("display", "inline-block");;
    }
}