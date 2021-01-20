$(document).ready(function() {
    $(".homeLink").on("click", function(){
        $("#homePage").show();
        $("#dicePage").hide();
        $("#coinPage").hide();
        $("#eenyMeenyPage").hide();
        $(".homeLink").addClass("active");
        $(".diceLink").removeClass("active");
        $(".coinLink").removeClass("active");
        $(".eenyLink").removeClass("active");
    });
    
    $(".diceLink").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").show();
        $("#coinPage").hide();
        $("#eenyMeenyPage").hide();
        $(".homeLink").removeClass("active");
        $(".diceLink").addClass("active");
        $(".coinLink").removeClass("active");
        $(".eenyLink").removeClass("active");
    });

    $(".coinLink").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").hide();
        $("#coinPage").show();
        $("#eenyMeenyPage").hide();
        $(".homeLink").removeClass("active");
        $(".diceLink").removeClass("active");
        $(".coinLink").addClass("active");
        $(".eenyLink").removeClass("active");
    });

    $(".eenyLink").on("click", function(){
        $("#homePage").hide();
        $("#dicePage").hide();
        $("#coinPage").hide();
        $("#eenyMeenyPage").show();
        $(".homeLink").removeClass("active");
        $(".diceLink").removeClass("active");
        $(".coinLink").removeClass("active");
        $(".eenyLink").addClass("active");
    });

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