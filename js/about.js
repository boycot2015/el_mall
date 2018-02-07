$(function () {
    //----------------固定导航栏-----------------------
    (function(window){
        function Method() {
            this.$ = $;
        }
        Method.prototype = {
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
        function doMethod() {
            let method = new Method();
            method.fixedBar();
            method.toPosition();
            method.toTarget();
        }
        doMethod();
    })(window)
})