$(function(){

    //头图变化

    $(document).scroll(function(){

        console.log($(document).scrollTop());

        if($(document).scrollTop()>20){

            if($('.maintopPic01').css('opacity') == '1'){

            $('.maintopPic01').stop().animate({

                opacity:'0'

            },'10');

           $('.chelianwang_wrap .wenzi').addClass('show');
 
          }
         
        }
        else{
              $('.maintopPic01').stop().animate({

                opacity:'1'

            },'10');

            $('.chelianwang_wrap .wenzi').removeClass('show');
        }
    })
})