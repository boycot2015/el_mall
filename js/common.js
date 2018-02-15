$(function () {
    $.F_SIZE(3000);
    console.log(window.location.pathname != '/service.html');
    let pathname = window.location.pathname;


        let color = '';
        let bgColor = '';
    $('.center>.list>li:eq(0)').on('mouseenter', function () {
        
        bgColor = $('header').css('backgroundColor');
        color = $('header').find('a').css('color');
        $('header').css('backgroundColor', '#fff');
        if (pathname != '/service.html' && pathname != '/shopslist.html') {
            $('header').find('a').css('color', '#333');
        }

    }).on('mouseleave', function () {
        $('header').css('backgroundColor', bgColor);
        if (pathname != '/service.html' && pathname != '/shopslist.html') {
            $('header').find('a').css('color', color);
        }
    })


    $(window).on('resize', function () {
        autoDisplay();
    })
    autoDisplay();

    function autoDisplay() {
        if ($(window).width() <= 960) {
            $('header nav>.center').hide();
            $('header').css('backgroundColor', '#2D2D2D');
            $('header').css('position', 'static');
            $('header').find('a').css('color', '#fff');
        } else {
            $('header').css('backgroundColor', 'transparent');
            $('header nav>.center').show();
            $('header').find('a').css('color', color);
            if(pathname!='/shopslist.html'){
                $('header').css('position', 'absolute');
            }else{
                $('header').css('position', 'static');
            }
        }
    }
})