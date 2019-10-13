$(".link-special-1").click(function(){
    $(this).html('<a href="#" class="nav-link link-1 link-special">Learn<i class="angle up icon"></i></a>');
    $(".popup-container-1").css({
        "display" : "block",
        "z-index" : "2000"
    });
    $(".popup-container-2").css({
        "z-index" : "1000"
    });
    $(".popup-container-1").animate({
      opacity : "1",
      top : "10%" 

    },300);
    
})
$(".btn-close").click(function(){
    
    $(".popup-container-1").animate({
        top : "40%",
        opacity : "0"
    },500,function(){
        $(".link-special-1").html('<a href="#" class="nav-link link-1 link-special">Learn<i class="angle down icon"></i></a>');
        $(".popup-container-1").css({
            "display" : "none"
        });

    });
    


});
$(".link-special-2").click(function(){
    $(this).html('<a href="#" class="nav-link link-1 link-special">Participate<i class="angle up icon"></i></a>');
    $(".popup-container-2").css({
        "display" : "block",
        "z-index" : "2000"
    });
    $(".popup-container-1").css({
        "z-index" : "1000"
    });
    $(".popup-container-2").animate({
      opacity : "1",
      top : "10%"  
    },300);
    
})
$(".btn-close-1").click(function(){
    
    $(".popup-container-2").animate({
        top : "40%",
        opacity : "0"
    },500,function(){
        $(".link-special-2").html('<a href="#" class="nav-link link-1 link-special">Participate<i class="angle down icon"></i></a>');
        $(".popup-container-2").css({
            "display" : "none"
        });

    });
    


});
$(".sidebar-link").click(function(){
    for(var i=1;i<=5;i++){
        console.log(this);
        if($(this).hasClass(`sidebar-link-${i}`)){
            break;

        }
    }
    

    for(var j=1;j<=5;j++){
        if($(`.sidebar-link-${j}`).hasClass("sidebar-link-active")){
            $(`.sidebar-link-${j}`).removeClass("sidebar-link-active");
            break;
        }
    }
    
    $(`.data-row-${j}`).animate({
        opacity : "0"
    },600,function(){
        if(i==4){
            $('.sub-sidebar-column').css({
                "display":"none"
            });
        }
        else{
            $('.sub-sidebar-column').css({
                "display":"block"
            });
        }
        
       
        $(`.data-row-${j}`).css({
            "display" : "none"
        });
        $(`.data-row-${i}`).css({
            "display" : "block"
        });
        $(`.data-row-${i}`).animate({
            opacity : "1"
        },600);
    })
   
   $(this).addClass("sidebar-link-active",1000,"easeInBack");
   

});
   
   
