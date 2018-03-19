$(function(){
    $('.login-box .login-area label').click(function(){
        $(this).hide();
    })
    $('.login-box .login-area input').blur(function(){
        if(!$(this).val()){
            $(this).next().show();
        }
    })
    $('.login-box .register-btn').on('click',function(){
        window.location.href = '/public/user/register/register.html'
    })
})