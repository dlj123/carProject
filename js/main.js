$(function(){
    
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
})