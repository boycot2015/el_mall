$(function () {

    /**
     * 点击切换分页
     * @param {*} pageIndex 传入页码
     */
    function getData(pageIndex) {
        var $contentBox = $('.content ul.list');
        var $asideBox = $('.content .aside ul');
        $.get('http://localhost:3003/blog?pageId='+pageIndex,res=>{
            if($contentBox.length){
                $contentBox.html(template('article', res))
            }
            $asideBox.html(template('aside', res))
        })
        
    }
    getData(0);

    //获blog取详情数据
    function getDetailData(){
        var $contentBox = $('.content ul.item');
        if(!$contentBox.length){
            return
        }
        let id = location.href.split('?')[1].split('=')[1];
        // console.log(id);
        
        $.get(`http://localhost:3003/blog?id=${id}`,res=>{
            $contentBox.html(template('article-detail', res))
        })
    }
    getDetailData();

    function choosePage() {
        let pageSize = 0;
        let pageIndex = 0;
        $('.container .page a')
            .on('click', function (e) {
                e.preventDefault();
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                    getData($(this).index()-1);
                    pageSize = $(this).index()-1;
            })
            $('.container .page>span.page-up').on('click',function(){
                if(pageSize>=2){
                    return;
                }
                pageSize++;
                getData(pageSize);
                $('.container .page a').eq(pageSize).addClass('active')
                .siblings()
                .removeClass('active');
            })
            $('.container .page>span.page-down').on('click',function(){
                if(pageSize<1){
                    return;
                }
                pageSize--;
                getData(pageSize);
                $('.container .page a').eq(pageSize).addClass('active')
                .siblings()
                .removeClass('active');
            })
    }
    choosePage();

    //鼠标移入显示隐藏分享
    $('.content .left .list ').on('mouseenter','.right .share-icon',function(){ 
        $(this).find('span.share').addClass('active')
    }).on('mouseleave','.right .share-icon',function(){
        $(this).find('span.share').removeClass('active')
    })
})