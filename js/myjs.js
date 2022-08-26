$(function () {
/* LOADING PAGE */
    setTimeout(() => {
        $('#loading_mask_svg').removeClass('ani_loadging')
        }, 1000);   
    /* 中間logo 小字 */
    setTimeout(() => {
        $('.top_1_caption_txt').removeClass('hide_opacity')
        }, 1300);
/* click */
    $('.top_header_logo_link').on("click",function(){
        $('.active-trail_1').removeClass('active');
        $('.active-trail_2').removeClass('active');
        $('.active-trail_3').removeClass('active');
        $('.active-trail_4').removeClass('active');
    });
    $('.active-trail_1').on("click",function(){
        $('.active-trail_1').addClass('active');
        $('.active-trail_2').removeClass('active');
        $('.active-trail_3').removeClass('active');
        $('.active-trail_4').removeClass('active');
    });
    $('.active-trail_2').on("click",function(){
        $('.active-trail_2').addClass('active');
        $('.active-trail_1').removeClass('active');
        $('.active-trail_3').removeClass('active');
        $('.active-trail_4').removeClass('active');
    });
    $('.active-trail_3').on("click",function(){
        $('.active-trail_3').addClass('active');
        $('.active-trail_1').removeClass('active');
        $('.active-trail_2').removeClass('active');
        $('.active-trail_4').removeClass('active');
    });
    $('.active-trail_4').on("click",function(){
        $('.active-trail_4').addClass('active');
        $('.active-trail_1').removeClass('active');
        $('.active-trail_2').removeClass('active');
        $('.active-trail_3').removeClass('active');
    });

    $('.calendar-1_1_right_middle_btn_left').on("click",function(){
        $('.calendar-1_1_right_middle_btn_left').addClass('active');
        $('.calendar-1_1_right_middle_btn_right').removeClass('active');
    });
    $('.calendar-1_1_right_middle_btn_right').on("click",function(){
        $('.calendar-1_1_right_middle_btn_right').addClass('active');
        $('.calendar-1_1_right_middle_btn_left').removeClass('active');
    });
    $('.media_1_btn_link').on("click",function(){
        $('.contain_ani_1').addClass('active');
        $('.media_1_btn').addClass('hide');
    });
    $('.media_2_btn_link').on("click",function(){
        $('.contain_ani_2').addClass('active');
        $('.media_2_btn').addClass('hide');
    });
    $('.media_3_btn_link').on("click",function(){
        $('.contain_ani_3').addClass('active');
        $('.media_3_btn').addClass('hide');
    });
/* ham_menu_switch */
    $('#ham-menu-btn').on("click",function(){ 
        $('#ham-menu-btn').toggleClass('active');
        $('#ham-menu').toggleClass('js-ham_menu_ani')
    });

/*about scroll bar 滑至底部 */
    $(".about_contain_scroll_wrapper").on("scroll",function(){
        var b = document.getElementById('scroll_wrapper')
        var h = b.height;//div可視區域的高度
        var sh = this.scrollHeight;//滾動的高度，$(this)指代jQuery物件，而$(this)[0]指代的是dom節點
        var st =this.scrollTop;//滾動條的高度，即滾動條的當前位置到div頂部的距離

        if($(window).width() >= 1024){
            if ( st >= sh - 600) {
                $('.about_3_contain_mask').css('height','100px');
                $('.about_3_contain_mask').css('bottom','-20px');
            } else {
                $('.about_3_contain_mask').css('height','280px');
                $('.about_3_contain_mask').css('bottom','-2px');
            };
        }
        else{

        }        
    });

/* 視窗捲動smooth*/

    $(window).on("scroll",function(){
        
        $("html").getNiceScroll().resize();

        if ($(window).width() >= 1024) {
            
        } else {

        }

        if (window.scrollY >= 1 ) {
            $('#top_header').addClass("sticky_header")
        } 
        else {
            $('#top_header').removeClass("sticky_header");
        }
    });

    if ($(window).width() <= 1023) {
        $("html").getNiceScroll().hide();

    } else {
        $("html").getNiceScroll().resize();
        $("html").niceScroll({
            background: "#fff",
            cursorcolor: "#144190",
            cursorwidth: "15px", 
            cursorminheight: 50,
            cursorfixedheight: false,
            cursorborder: "0px",
            cursorborderradius: "0px", 
            zindex: "999999",
            scrollspeed: 120 ,
            mousescrollstep: 50,
            cursordragontouch: false,
            cursordragspeed: 0.3,
            touchbehavior: false,
            hwacceleration: true,
            cursorcolor: false,
            smoothscroll: true,
            autohidemode: false,
            boxzoom: false,
            railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            railalign: "right",
            railvalign: "bottom",
            oneaxismousemode:false,
            horizrailenabled: false,
        });
    }

/* 輪播圖 */
    $('.top_4_list_wrapper , .about_4_list_wrapper').slick({
        dots: false,
        infinite: true,
        speed:8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        variableWidth: true,
        cssEase: 'linear',
        arrows:false,
        pauseOnDotsHover:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        swipe:false,
    });
    $('.about_5_list_wrapper').slick({
        dots: false,
        infinite: true,
        speed:4500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        variableWidth: true,
        cssEase: 'linear',
        arrows:false,
        pauseOnDotsHover:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        swipe:false,
    });
    
});

/* 圖片位移位置 */
    var a = document.getElementById('move_img')
    var a_L = a.offsetLeft;

    window.onscroll = function() {myFunction()};

    function myFunction() {
        /* 捲動高度 */
        var y = window.pageYOffset;

        /* 圖片移動 */

        if($(window).width() <= 767){
            a.style.left = -( a_L + y )/11* 1 + 'px';
        }
        else{
            if($(window).width() >= 768){
                a.style.left = -( a_L + y )/10* 1 + 'px';
            }
            else{
                if($(window).width() >= 1024){
                    a.style.left = -( a_L + y )/8* 1 + 'px';
                }
                else{

                }
            }
        }
        
    };
