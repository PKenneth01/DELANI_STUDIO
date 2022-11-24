$(document).ready(function(){ 
    // $("#img_container img, #img_container a").hover(
    //     function(){
    //         $(this).parent().find("a").css("visibility","visible");
    //     }, function(){
    //         $(this).parent().find("a").css("visibility","hidden");
    //     }

    // );

    $('.item-hover').hover(function() {

        console.log($(this))
        $(this).children('.image-description').toggleClass('hidden')
    });

});