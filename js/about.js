$(function () {

    // 缩放屏幕
    $(window).on('resize', function () {
        window.hideBar();
        window.middleWidth();
    })
    //----------------导航栏-----------------------
    ;(function (window) {
        function Method() {
            this.$ = $;
        }
        Method.prototype = {
            hideBar() {
                // 隐藏导航栏
                if ($(window).width() < 640) {
                    $('.about').hide();
                } else {
                    $('.about').show();
                }
            },
            fixedBar() {
                //导航吸顶
                $(window).on('scroll', function () {
                    //   console.log($('nav.about')[0].offsetHeight);

                    if ($('nav.about').length > 0) { //判断是否为关于页面
                        if ($(window).scrollTop() > $('.banner')[0].offsetHeight + $('nav.about')[0].offsetHeight) {
                            $('.banner').css({
                                'marginBottom': $('nav.about')[0].offsetHeight
                            });
                            $('nav.about').addClass('fixed');
                        } else {
                            $('nav.about').removeClass('fixed');
                            $('.banner').css({
                                'marginBottom': 0
                            });
                        }
                    }
                })
            },
            toPosition() {
                $('nav.about li').on('click', function () {
                    $('html, body').animate({
                        'scrollTop': ($('.content').children().eq($(this).index()).offset().top - this.offsetHeight)
                    }, () => {
                        $('nav.about li').removeClass('active').eq($(this).index()).addClass('active');
                    });
                    //   $(window).animate({'pageYOffset':$('.aboutus')[0].offsetTop});
                })
            },
            toTarget() {
                //滚动定位  
                $(window).on('scroll', function () {
                    for (let i = $('nav.about li').length - 1; i > -1; i--) {
                        if ($('html, body').scrollTop() >= $('.content').children().eq(i).offset().top - $('nav.about')[0].offsetHeight * 2) {
                            $('nav.about li').removeClass('active').eq(i).addClass('active');
                            break;
                        }
                    }
                })
            }
        }
        let method = new Method();        
        function doMethod() {
            method.fixedBar();
            method.toPosition();
            method.toTarget();
            method.hideBar();
        }
        doMethod();
        window.hideBar = method.hideBar;
    })(window);
    // 响应式布局
    ;(function(w){
        function middleWidth(){
            if($(w).width()<640){              
                $('.culture .dev ul.list>li').css('width','100%');
            }else{
                $('.culture .dev ul.list>li').css('width','40%');
            }
        }
        w.middleWidth = middleWidth;
    })(window);


})