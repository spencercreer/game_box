$(document).ready(function() {
    // Randomly choose a dice to show
    var randomDice = Math.ceil(Math.random()*6);
    $("#dice" + randomDice).show();

    // Roll Dice button on click randomly choose a dice twenty times
    $(".rollBtn").on("click",function(){
        let m=0;
        var rollDice = setInterval(function() {
            randomDice = Math.ceil(Math.random()*6);
            $(".dice").hide();
            $("#dice" + randomDice).show();
            m++;            
            if(m >= 20){
                clearInterval(rollDice);
            }
        },200);
    });

    $(".addDiceBtn").on("click",function(){

    });
});