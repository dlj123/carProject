$(function(){

    function originInit(){
        $("#originCar").vc3dEye({
            imagePath:"images/originCar/",
            totalImages:51,
            imageExtension:"png"
        });
        $("#orderCar").html("");
        
        $("#originCar").append('<button>原车</button>');

        $("#orderCar").append('<button>定制区</button>');
       }
       function orderInit(){
            $("#orderCar").vc3dEye({
                imagePath:"images/orderCar/",
                totalImages:51,
                imageExtension:"png"
            });
            $("#originCar ").html("");
            $("#originCar").append('<button>原车</button>');

            $("#orderCar").append('<button>定制区</button>');

       }
    //原车去3D效果初始化
   if($("#originCar").hasClass('current')){
      originInit()
   }
   
     //定制区3D效果初始化
   if ($("#orderCar").hasClass('current')){
      orderInit();
   }
    
    //原车和定制区切换
   

    $('#originCar').on('click','button',function(){
             if($('#originCar').hasClass('current')){
                 $('#originCar').removeClass('current');
                 $("#orderCar").addClass('current');              
                 orderInit();
             }
             else{
                $("#orderCar").removeClass('current');
                $("#originCar").addClass('current');
               
                originInit(); 
             }
    })
    $("#orderCar").on('click','button',function(){
        if($("#orderCar").hasClass('current')){
            $("#orderCar").removeClass('current');
            $("#originCar").addClass('current');
            originInit();
        }
        else{
            $('#originCar').removeClass('current');
            $("#orderCar").addClass('current');
            orderInit();
        }
    })
})