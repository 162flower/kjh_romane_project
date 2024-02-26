// 헤더 - 탑 영역
$('.h_top_slide').slick({
    arrows : false,
    vertical : true,
    autoplay : true,
    autoplaySpeed : 5000,
    speed : 1200
});

// 본문1 - 슬라이드
$('.main_slide').slick({
    prevArrow : '.prev_btn1',
    nextArrow : '.next_btn1',
    dots : true,
    appendDots : '.swiper_btn02',
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 1200
 });

 $('.btn02_pause').click(function(e){
    e.preventDefault();
    $(this).hide();
    $('.btn02_play').show();
    $('.main_slide').slick('slickPause');
});
$('.btn02_play').click(function(e){
    e.preventDefault();
    $(this).hide();
    $('.btn02_pause').show();
    $('.main_slide').slick('slickPlay');
});


// 본문7 md추천 - 슬라이드
$('.md_slide').slick({
    prevArrow : '.prev_btn',
    nextArrow : '.next_btn',
    centerMode : true,
    slidesToShow : 3,
    centerPadding: '100px',
    variableWidth: true
})
