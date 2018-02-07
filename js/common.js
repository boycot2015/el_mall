$(function(){
    // $.F_SIZE(1200);

    let color = '';
    let bgColor = '';
    $('.center>.list>li:eq(0)').on('mouseenter',function(){
        color = $('header').find('a').css('color');
        bgColor = $('header').css('backgroundColor');
        $('header').css('backgroundColor','#fff');
        $('header').find('a').css('color','#333');
        
    }).on('mouseleave',function(){
        $('header').css('backgroundColor',bgColor);
        $('header').find('a').css('color',color);
    })

    $(window).on('resize',function(){
        autoDisplay();
    })
    autoDisplay();
    function autoDisplay(){
        if($(window).width()<=960){            
            $('header nav>.center').hide();
            $('header').css('backgroundColor','#2D2D2D');
            $('header').css('position','static');
        }else{
            $('header').css('backgroundColor','transparent');
            $('header nav>.center').show();
            $('header').css('position','absolute');
        }
    }
})