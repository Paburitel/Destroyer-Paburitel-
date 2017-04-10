$(document).ready(function() {


    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    
    function parallaxScroll() {
        let scrolled = $(window).scrollTop();

        let winHeight = $(window).height();
        let imgTop = $('#box-img').offset().top;
        let imgHeight = $('#box-img').height();
        let imgWidth = $('#box-img').width();
        // console.log(winHeight + scrolled + "win");
        // console.log(imgTop + "img");


        // let check = (730 - imgHeight > gap * -1);

        if (((winHeight + scrolled) > imgTop)) {
            let gap = (0 - ((winHeight + scrolled - imgTop) * .6));
            // console.log(imgWidth/1400 * 788 + gap + "-gap");
            // console.log(imgWidth + "imgWidth");
            if (imgWidth/1400 * 788 + gap > imgHeight+30) {
                $('#box-img').css('backgroundPositionY', gap + 'px');
            }
        }



    }
});
