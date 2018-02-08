$(function(){
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
})