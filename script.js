$(document).ready(function() {

    $(".diceBtn").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").show();
        $("#coinPage").hide();
        $("#eenyMeenyPage").hide();
    });

    $(".coinBtn").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").hide();
        $("#coinPage").show();
        $("#eenyMeenyPage").hide();
    });

    $(".eenyMeenyBtn").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").hide();
        $("#coinPage").hide();
        $("#eenyMeenyPage").show();
    });
});