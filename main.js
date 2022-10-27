$(document).ready(function(){
    $(".backBtn").scrollTop( 300 );
    $(".navigation__lnk").click(function (){
        $(this).next(".navigation__innerMenu").slideToggle();
    })
});