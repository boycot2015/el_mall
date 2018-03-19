$(function(w){
    function getCode(){
        w.getData({
            path:'/code'
        },res=>{
            if(res.code==200){
                $('.code-box .code').html(res.data);   
            }else{
                console.log('获取验证码失败！');
                
            }
        })
    }
    getCode();
    $('.code-box .code').on('click',function(){
        getCode();
    })
})