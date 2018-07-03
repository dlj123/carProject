$(function(){
    //小屏上导航菜单的显示和隐藏
    $('#header #menuIcon').on('click',function(){
    
        if(!$('.nav').hasClass('show')){

           $('.nav').addClass('show');
        }
        else{
            $('.nav').removeClass('show');
        }
    })
})