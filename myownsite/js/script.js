$(document).ready(function(){
    $(".nav-button").on("click", function(){
        var target=$(this).data("target");
        $(target).toggleClass("nav--open");
    });
})