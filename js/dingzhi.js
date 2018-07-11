$(function(){

    function originInit(){

        $("#orderCar").html("");

        $("#originCar").vc3dEye({

            imagePath:"images/originCar/",

            totalImages:51,

            imageExtension:"png"
        });

        $("#originCar").append('<button>原车</button>');

        $("#orderCar").append('<button>定制区</button>');

       }
       function orderInit(){

        $("#originCar ").html("");

            $("#orderCar").vc3dEye({

                imagePath:"images/orderCar/",

                totalImages:51,

                imageExtension:"png"
            });
            $("#originCar").append('<button>原车</button>');

            $("#orderCar").append('<button>定制区</button>'); 

       }
    //原车去3D效果初始化
   if($("#originCar").hasClass('current')){

      originInit()

   }
   else{

      orderInit();

   }
     //定制区3D效果初始化
   if ($("#orderCar").hasClass('current')){
       
      orderInit();
   }
   else{
    originInit()
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
        console.log($("#orderCar").hasClass('current'))
        if(!$("#orderCar").hasClass('current')){
           
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
})