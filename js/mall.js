$(function () {
    $('.part1').each(function (index, e) {
        $('.part1:eq(' + index + ') .change-colorbar li').on('click', function () {
            $('.part1:eq(' + index + ') ul.pic-list li').eq($(this).index()).fadeIn().siblings().fadeOut();
            $('.part1:eq(' + index + ') ul.pic-list li>.right').eq($(this).index()).fadeIn().parent().siblings().fadeOut();
        })
    })
})