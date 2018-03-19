$(function(w){
    function getPictureData(){
        let id = location.href.split('=')[1];
        w.getData({
            path:id?'/picture?id='+id:'/picture'
        },
        res=>{
            // console.log(res);
            $('.container .content').html(template('picture',res))
        })
    }
    getPictureData();
})