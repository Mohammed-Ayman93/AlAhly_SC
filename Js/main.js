        // start owl carasousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$(document).ready(function(){
            // start login section 
    $(".start .btn").click(function(){
        $(".start").fadeOut(2000);
        $(".super_container").fadeIn(2200);
    });
            // start nav bar 
    $(".my_nav .navbar .collapse ul li a").click(function(e){
        e.preventDefault();
        $(".my_nav .navbar .collapse ul li a").removeClass("actives");
        $(this).addClass("actives");
    });
    $(".my_nav .navbar .collapse ul li a").click(function(){
            $("html , body").animate({
                scrollTop : $("#" + $(this).data("scroll")).offset().top -110,
            },1000);
    });
    $(window).scroll(function(){
        $(".Block").each(function(){
            if($(window).scrollTop() > $(this).offset().top-120){
                let ID = $(this).attr("id");
                $(".my_nav .navbar .collapse ul li a").removeClass("actives");
                $(".my_nav .navbar .collapse ul li a[data-scroll='"+ ID +"']").addClass("actives");
                    }
            if($(window).scrollTop() > 0){
                $(".my_nav .navbar").css("background-color","#ff001b7d").css("border-radius","20px").css("top","25px").css("width","80%");
                $(".up").css("display","block");
            }
            else{
                $(".my_nav .navbar").css("background-color","var(--main_color)").css("border-radius","0 0 20px 20px").css("top","0").css("width","100%");
                $(".up").css("display","none");
            }
        });
        
    });
            // start up icon 
    $(".up").click(function(){
        window.scrollTo(0,0);
    })
            // start this season  
    $(".this_season .change").click(function(){
        $(".this_season span").removeClass("light");
        $(".this_season .first").addClass("light");
        if($(this).attr("title")==("اضغط لإظهار قميص الجمهور")){
            $(this).attr("title","اضغط لإظهار القميص الرسمي");
            $(".this_season .shirt img").attr("src","Images/t-shirt/t-shirt_fans.jpg");
            $(".this_season .first").attr("title","طقم الجمهور الأول");
            $(".this_season .second").attr("title","طقم الجمهور الثاني");
            $(".this_season .third").attr("title","طقم الجمهور الثالث");
            $(".this_season .Decs").text("Fan T-shirt");
        }
            else{
            $(this).attr("title","اضغط لإظهار قميص الجمهور");
            $(".this_season .shirt img").attr("src","Images/t-shirt/alahly_t-shirt1.png");
            $(".this_season .first").attr("title","الطقم الأساسي");
            $(".this_season .second").attr("title","الطقم الاحتياطي الأول");
            $(".this_season .third").attr("title","الطقم الاحتياطي الثاني");
            $(".this_season .Decs").text("Official T-shirt");
            }
    });
    $(".this_season .first").click(function(){
        $(".this_season span").removeClass("light");
        $(this).addClass("light");
        if($(this).attr("title")==("الطقم الأساسي")){
            $(".this_season .shirt img").attr("src","Images/t-shirt/alahly_t-shirt1.png");
        }
        else{
            $(".this_season .shirt img").attr("src","Images/t-shirt/t-shirt_fans.jpg");
        }
        });
    $(".this_season .second").click(function(){
        $(".this_season span").removeClass("light");
        $(this).addClass("light");
        if($(this).attr("title")==("الطقم الاحتياطي الأول")){
            $(".this_season .shirt img").attr("src","Images/t-shirt/alahly_2nd_t-shirt.png");
        }
        else{
            $(".this_season .shirt img").attr("src","Images/t-shirt/t-shirt_fans2.jpg");
        }
        });
    $(".this_season .third").click(function(){
        $(".this_season span").removeClass("light");
        $(this).addClass("light");
        if($(this).attr("title")==("الطقم الاحتياطي الثاني")){
            $(".this_season .shirt img").attr("src","Images/t-shirt/alahly_3rd_t-shirt.png");
        }
        else{
            $(".this_season .shirt img").attr("src","Images/t-shirt/t-shirt_fans3.jpg");
        }
        });
            // start legand card 
    $(".btn22").click(function(){
        $(".legand_card22").fadeIn(2000);
    });
    $(".btn10").click(function(){
        $(".legand_card10").fadeIn(2000);
    });
    $(".btn1").click(function(){
        $(".legand_card1").fadeIn(2000);
    });
    $(".close").click(function(){
        $(".legand_card").fadeOut(2000);
    });
            // start scrolling animation 
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
            // console.log(entery)
    if  (entery.isIntersecting){
        entery.target.classList.add('show');
        }
    else {
        entery.target.classList.remove('show');
        }
    });
    });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
});
