$(function(){
   
    //轮播图全屏显示
    $('.cti-welcome').height($(window).height());

    //小屏上导航菜单的显示和隐藏
    $('#header #menuIcon').on('click',function(){
    
        if($(this).find('i').hasClass('icon-nav')){

            $(this).find('i').removeClass('icon-nav').addClass('icon-cha');

           $('.nav').addClass('show');
        }
        else{
            $(this).find('i').removeClass('icon-cha').addClass('icon-nav');

            $('.nav').removeClass('show');
        }
    })

    //首页轮播图
    $('#cti_welcome_slider').slick({

        autoplay:true,

        autoplaySpeed:3000,

        dots: true,

        fade:true,

        arrows:true,

        infinite:true,

        pauseOnHover:true,

        swipe:true,

        touchMove:true,

        touchThreshold:5
    });
    $('.index-section').scroll(function(){

           console.log($(this).scrollTop());

          // if($(document).scrollTop())
    })
 
    //懒加载
    /*$("img.lazy-img").lazyload({effect: "fadeIn",threshold :200});*/

    //全屏切换
    new fullpage('#content_wrap', {
        //options here
        autoScrolling:true,

        anchors: ['page1', 'page2', 'page3', 'page4'],  //定义锚链接

        scrollHorizontally: true,

        menu: '.nav', //绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
       
        verticalCentered:true,

        scrollOverflow: true,

        onLeave: function(origin, destination, direction){
            
            var loadedSection = this;
    
            //using index

            if(origin.index == 0 && destination.index==1 ||  destination.index==2 || destination.index==3 || destination.index==4 || destination.index==5  && direction == 'down'){

               // alert("Section 2 ended loading");
               $('#header').css('background','#fff');

               $('#content_wrap').css('padding-top','70px');

               $('.header_wrap .nav li a').css('color','#333');

               $('.header_wrap .nav li a:after').css('background','transparent');

              // $('.header_wrap .nav li:hover a:after').css('background','#333');

               $('.header_wrap .nav li.active a:after').css('background','#333');

            }
             else if(origin.index == 1 || origin.index == 2 || origin.index == 3 || origin.index == 4 || origin.index == 5 &&destination.index==0 && direction == 'up'){
                 
                $('#header').css('background','transparent');

                $('#content_wrap').css('padding-top','70px');

                $('.header_wrap .nav li a').css('color','#fff');

                $('.header_wrap .nav li a:after').css('background','transparent');
 
                $('.header_wrap .nav li:hover a:after').css('background','#fff');

                $('.header_wrap .nav li.active a:after').css('background','#fff');
             }
        }
    });   
    
})