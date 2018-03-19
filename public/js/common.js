$(function (w) {
    $.F_SIZE(4800);
    // console.log(window.location.pathname != '/service.html');
    
    
    //显示下拉菜单
    let pathname = window.location.pathname,color = '', bgColor = '',cartColor = '';
    $('.center>.list>li:eq(0)').on('mouseenter', function () {
        bgColor = $('header').css('backgroundColor');
        color = $('header').find('.center a').css('color');
        let cartColor = $('header').find('.right>span').css('color');
        $('header').css('backgroundColor', '#fff');
        if (pathname != '/service.html' && pathname != '/shopslist.html') {
            $('header').find('.center a').css('color', '#333');
            $('header').find('.right>span').css('color', '#333');
        }

    }).on('mouseleave', function () {
        $('header').css('backgroundColor', bgColor);
        if (pathname != '/pages/service.html' && pathname != '/pages/shopslist.html') {
            $('header').find('.center a').css('color', color);
            $('header').find('.right>span').css('color', color);
        }
    })


    $(window).on('resize', function () {
        let bgColor = $('header').css('backgroundColor');        
        autoDisplay();
    })
    //响应式布局
    function autoDisplay() {
        if ($(window).width() <= 960) {
            $('header nav>.center').hide();
            $('header').css('backgroundColor', '#2D2D2D');
            $('header').css('position', 'static');
            // $('header').find('a').css('color', '#fff');
        } else {
            $('header').css('backgroundColor', bgColor);
            $('header nav>.center').show();
            // $('header').find('a').css('color', color);
            if(pathname!='/shopslist.html'){
                $('header').css('position', 'absolute');
            }else{
                $('header').css('position', 'static');
            }
        }
    }
    autoDisplay();
    
    //点击购车图标显示隐藏下拉菜单
    $('header nav .right>span.cart-icon').on('click',function(){
        $(this).next().toggle();
    })


    /**
     * ajax请求获取数据
     * @param {*} option 传入一个对象包括url ,可选type
     * @param {*} callback 数据回来后的回调函数
     */
    function getData(option,callback){
        let url = 'http://localhost:3003'+option.path;
        $.ajax({
            url,
            type:option.type||'get',
            data:{
                data:option.data
            },
            success:res=>{
                callback(res);
            }
        })
    }
    //暴露该方法给windows
    w.getData = getData;

    //点击登录跳转至登录页
    $('header nav .right>.list a').last().click(function(e){
        e.preventDefault();
        window.location.href = '/public/user/login/login.html'
    })
    //手机端下菜单切换
    $('header nav .drap .meun').on('click',function(){
        if($(this).hasClass('icon-guanbi')){
            $(this).removeClass('icon-guanbi');
            $(this).addClass('icon-caidan');        
        }else{
            $(this).removeClass('icon-caidan');
            $(this).addClass('icon-guanbi');
        }
        $('header nav .drap ul.list').slideToggle();
        $(this).parent().find('li ').toggleClass('active');                       
    })
})