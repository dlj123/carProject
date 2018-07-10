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

        fade:true,

        arrows:true,

        prevArrow: $('.cti-btn-prev'),

        nextArrow: $('.cti-btn-next'),

        infinite:true,
        
        swipe:true,

        touchMove:true,

        touchThreshold:5
    });

    $('.cti-welcome-pagination').on('click', 'span', function() {

        $('#cti_welcome_slider').slick('slickGoTo', $(this).index());

    });

    $('#cti_welcome_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //console.log(nextSlide);
        $('.cti-welcome-pagination').find('span').eq(nextSlide).addClass('d-active').siblings().removeClass('d-active');

    });
    //创建分页器
    var html = '';

    $('#cti_welcome_slider').find('.image').each(function(i, ele) {

        if (i == 0) {
            html += '<span class="d-active"></span>';
        } else {
            html += '<span></span>';
        }
    });

    $('.cti-welcome-pagination').html(html);
 
    //懒加载
    /*$("img.lazy-img").lazyload({effect: "fadeIn",threshold :200});*/

    //全屏切换菜单高亮
    function wholeScoll(){

        $('#content_wrap').fullpage({
            //options here
            autoScrolling:true,
    
            anchors: ['page1', 'page2', 'page3', 'page4'],  //定义锚链接
    
            scrollHorizontally: true,
    
            menu: '.nav', //绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
           
            verticalCentered:true,
    
            scrollOverflow: true,
    
            afterLoad:function(anchorLink,index){
    
                console.log(anchorLink,index);
    
               if(anchorLink!=='page1' && index!==1){

                  if($(window).width()>950){
    
                    $('body').css('padding-top','70px');

                  }
                 else{
                    $('body').css('padding-top','0px');

                    if(index !== 2 && index !== 3 && index !== 4){

                        $.fn.fullpage.setAutoScrolling(false);

                    }
                    else{

                        $.fn.fullpage.setAutoScrolling(true);
                    }
                 }
                }
                else if(index==1){

                    $.fn.fullpage.setAutoScrolling(true);

                    $('body').css('padding-top','0px');
                }
                else{
                    $('body').css('padding-top','0px');

                    $.fn.fullpage.setAutoScrolling(true);
                }
            },
    
            onLeave:function(index, nextIndex, direction){
    
               console.log(index, nextIndex, direction);

              if($(window).width()>950){

                                if(index == 1 && direction=='down'){
                        
                                    if(nextIndex==2 || nextIndex==3 || nextIndex==4){
                        
                                            $('#header').css('background','#fff');
                        
                            
                                            $('.header_wrap .nav li a').css('color','#333');
                        
                                            $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                            $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                        
                                    }
                                }
                                else if(index == 2 && direction=='down'){
                                    
                                    $('#header').css('background','#fff');                                         
                        
                                    $('.header_wrap .nav li a').css('color','#333');
                        
                                    $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                    $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                            
                        
                                }
                                else if(index == 3 && direction=='down'){
                                    
                                    $('#header').css('background','#fff');                 
                        
                                    $('.header_wrap .nav li a').css('color','#333');
                        
                                    $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                    $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                        
                                }
                                else if(nextIndex==1 && direction=='up'){
                        
                                    if(index==2 || index==3 || index==4){
                        
                                        $('#header').css('background','transparent');                       
                                    
                                        $('.header_wrap .nav li a').css('color','#fff');
                        
                                        $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                        $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#fff');                       
                                    
                                    }
                        
                                }
                                else if(nextIndex==2 && direction=='up'){
                        
                                        $('#header').css('background','#fff');                                                      
                        
                                        $('.header_wrap .nav li a').css('color','#333');
                                        
                                        $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                        $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                        
                                }
                                else if(nextIndex==3 && direction=='up'){
                        
                                        $('#header').css('background','#fff');    
                                        
                                    
                        
                                        $('.header_wrap .nav li a').css('color','#333');
                                            
                                        $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                        $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                        
                                }
                            else if(nextIndex==4 && direction=='up'){
                        
                                    $('#header').css('background','#fff');                       
                                
                                    $('.header_wrap .nav li a').css('color','#333');
                                        
                                    $('.header_wrap .nav li').find('i').css('background','transparent');
                        
                                    $('.header_wrap .nav li').eq(nextIndex-1).find('i').css('background','#333');
                        
                                }
                                else{

                                    $('#header').css('background','#fff');
                                                        
                                    $('.header_wrap .nav li a').css('color','#333');
                                        
                                    $('.header_wrap .nav li').find('i').css('background','transparent');
                                }
                    }   
            }
         });   
    }
    wholeScoll();
})