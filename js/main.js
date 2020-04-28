$(document).ready(function () {

   $(".title").on("click", function(){

    $("ul li .accordion-side").stop().slideUp();

    $(this).next(".accordion-side").stop().slideToggle();

   });

});