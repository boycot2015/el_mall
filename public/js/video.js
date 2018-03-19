$(function(w){
    w.getData({
        path:'/video'
    },res=>{
        let $contentBox = $('.content ul.item ul');        
        $contentBox.html(template('video', res))
    })
   function playVideo(){
       //点击播放视频
        $('.left .item li ul ').on('click','li a',function(){
            // console.log($(this).attr('data-videoSrc'))
            $('.video-container').attr('src',$(this).attr('data-videoSrc'));
            $('main.container .content .play-box ').show();
        })
        //点击关闭视频弹窗
        $('.play-box .cover span.close').click(function(){
            $(this).parent().parent().hide();
        })
    }
    playVideo();
})