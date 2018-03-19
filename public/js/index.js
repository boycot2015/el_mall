$(function(w){
    function doSwiper(){
        let percent = 100;
    let timer = null;
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:2000,
        speed:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction:false,
        paginationClickable:true,
        onSlideNextEnd: function(swiper){
           timer = setInterval(function(){
            $('.swiper-pagination-bullet').eq(swiper.activeIndex).find('a').css({'transform':'translateY('+(percent--)+'%)'})
            if(percent<=0){
                percent = 100;
                $('.swiper-pagination-bullet').eq(swiper.activeIndex).find('a').remove();
                clearInterval(timer)                
            }
           },20)
          },
          onSlideNextStart:function(swiper){
            $('.swiper-pagination-bullet').eq(swiper.activeIndex).append('<a href="javascript:;"></a>');
          }
      }) 
      $('.swiper-container').mouseenter(function(){
        mySwiper.stopAutoplay();
      }).mouseleave(function(){
        mySwiper.startAutoplay();
      })
    } 
    w.getData({
        path:'/banner'
    },res=>{
        if(res.code==200){
            $('.swiper-wrapper').html(template('banner',res));
            doSwiper();   
        }
    })
})