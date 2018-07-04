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
    //监听鼠标滚轮
     $('.cti-welcome').on('mousewheel', function(evt) {

        var _this = $(this);

        //console.log(evt.deltaX, evt.deltaY, evt.deltaFactor);
        if (evt.deltaY == -1) {
            //向下
           // $icons.addClass('d-hide');
            var top = $('#dingzhi_section').offset().top - $('#header').height();
            
            $('html,body').stop().animate({
                scrollTop: top
            }, 'slow', function() {
              
            });
        }
    });
    $('.cti-welcome').bind('mousewheel', function(e) {
        scrollFunc(e);
    });
    //火狐下的鼠标滚动事件
    $('.cti-welcome').bind('DOMMouseScroll', function(e) {
        scrollFunc(e);
    });

    //阻止页面滚动
    function scrollFunc(e) {
        e = e || window.event;
        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.returnvalue = false;
            return false;
        }
    }
    //菜单高亮显示
    var winWidth = parseInt($(window).width());

    if(winWidth>992){

        //TOP导航，滚动交互
        var scroll_array=[];

        for(var i=0;i<$(".nav li").length-1;i++){

            if(i==0){

                scroll_array[i]=$("#"+$(".nav li").eq(i).find('a').attr('data-section')).offset().top;
            }
            else{

               scroll_array[i]=$("#"+$(".nav li").eq(i).find('a').attr('data-section')).offset().top -70;
            }
            
            console.log(scroll_array);

        }
        $(document).scroll(function(){

            if($(document).scrollTop() < 700){

                $(".nav li").find('a').removeClass("active").eq(0).addClass("active");

                $(".nav li").eq(0).find('a').addClass("active");

            }else{

                for(var i=0;i<scroll_array.length;i++){

                    if($(document).scrollTop()>scroll_array[i]&&$(document).scrollTop()<scroll_array[i+1]){

                        $(".nav li a").removeClass("active");

                        $(".nav li").eq(i).find('a').addClass('active');

                        return

                    }else{

                        $(".nav li a").removeClass("active");

                        $(".nav li").eq(i).find('a').addClass('active');

                    }
                }
            }
        })
    }

    //懒加载
    /*$("img.lazy-img").lazyload({effect: "fadeIn",threshold :200});*/

        //导航锚点
        $(".nav a").on("click", function () {

            var index = $(this).parent('li').index();       

            if(index == 0){

                        $("html,body").animate({

                            scrollTop: $($(this).attr("href")).offset().top

                        }, {

                            duration: 500,

                            easing: "swing"

                        });
            }
            else{
                $("html,body").animate({

                    scrollTop: $($(this).attr("href")).offset().top - 70

                }, {

                    duration: 500,

                    easing: "swing"

                });
            }
            return false;
      
      
        })   

})