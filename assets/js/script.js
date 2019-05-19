$(document).ready(function () {
    $('.scroll-top_').hide();
    $('.contact-box').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // $('section.navbar-orange').toggleClass('fixed-nav');
            // $('img.logo').attr('src','../assets/img/Logo_PF_short.svg').fadeIn()
            $('section.nv-short').fadeIn();
            $('.scroll-top_').fadeIn();
        } else {
            $('section.nv-short').fadeOut();
            $('.scroll-top_').fadeOut();
            // console.log('Okk')
            // $('section.navbar-orange').removeClass('fixed-nav')
        }
    })

    $('a span.eng').click(function () {
        // console.log('jskgjks');
        $(this).css('opacity', '.3');
        $('.cz').css('opacity', '1');
    })
    $('span.cz').click(function () {
        console.log('Fuck this shit')
        $(this).css('opacity', '.3');
        $('.eng').css('opacity', '1');
    })
    $('.scroll-top_').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.detail-overlay').click(function () {
        document.getElementById("myNav").style.width = "100%";
        $('.scroll-top_').hide();
    })
    $('.closebtn').click(function () {
        document.getElementById("myNav").style.width = "0%";
    })
    $('.toggle-form').click(function () {
        $('.contact-box').slideToggle();
        $('html, body').animate({
            scrollTop: $(".contact-box"). offset().bottom
        }, 800);
    })

    //process the form probably using wordpress api
    $('.send-mail').click(function() {
        $('.spinner-border').show();
        $('.spinner-text').hide();
       
    })
});