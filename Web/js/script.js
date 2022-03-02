$(document).ready(function(){

    // setTimeout(function(){
    //     $('.aniWrap').addClass('aniShow');
    // }, 5000);
    $('.bt').click(function(){
        
        //클래스명을 모두 저장해 일단
        // aniWrapNm에서 aniWrap을 제외한 나머지 단어 색출해라
        // 공백이 있다면 공백도 없애주고....
        // 그래서 순수한 배경애니메이션 해당 클래스만 속출해서 다시 담아라


     
        $('.aniWrap').removeClass('bgBlack bgYellow bgRed')
        $('.aniWrap').addClass($(this).data('class'));


    });


})