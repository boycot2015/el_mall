$(function(){
    // 缩放屏幕
    $(window).on('resize', function () {
        displayOneline();
        
    })
    displayOneline();
    function displayOneline(){
        if($(window).width()<998){
            $('main section.body .part1 ul.list li').css('width','100%');
            $('main section.body .part2 ul.list li>.left').css('width','100%');
            $('main section.body .part2 ul.list li>.right').css('width','100%');
        }else{
            $('main section.body .part1 ul.list li').css('width','30.33%');
            $('main section.body .part2 ul.list li>.left').css('width','30%');
            $('main section.body .part2 ul.list li>.right').css('width','60%');
        }   
    }
})