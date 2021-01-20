$(document).ready(function() {
    var dice = 1;
    // Randomly choose a dice to show
    getDice(dice);

    // Roll button on click randomly choose dice multiple times
    $(".rollBtn").on("click",function(){
        // Disable all buttons
        $(".rollBtn").prop("disabled", true);
        $(".addDiceBtn").prop("disabled", true);
        $(".clearDiceBtn").prop("disabled", true);
        let m=0;
        var rollDice = setInterval(function() {
            switch(dice){
                case 1:
                    getDice(1);
                    break;
                case 2:
                    getDice(1)
                    getDice(2)
                    break;
                case 3:
                    getDice(1);
                    getDice(2);
                    getDice(3);
                    break;
                case 4:
                    getDice(1);
                    getDice(2);
                    getDice(3);
                    getDice(4);
                    break;
                case 5:
                    getDice(1);
                    getDice(2);
                    getDice(3);
                    getDice(4);
                    getDice(5);
                    break;
                default:
                    alert("Oops!")
            }
            m++;            
            if(m >= 15){
                clearInterval(rollDice);
                // Enable all buttons
                $(".addDiceBtn").prop("disabled", false);
                $(".rollBtn").prop("disabled", false);
                $(".clearDiceBtn").prop("disabled", false);
                if(dice >= 5){
                    // Disable Add Dice Button if there are five dice
                    $(".addDiceBtn").prop("disabled", true);
                }
            } 
        },200);
    });

    $(".addDiceBtn").on("click",function(){
        // Show next die in sequence
        dice++;
        $("#dice" + dice).show();
        getDice(dice);
        if(dice >= 5){
            // Disable Add Dice Button if there are five dice
            $(".addDiceBtn").prop("disabled", true);}
    });

    $(".clearDiceBtn").on("click",function(){
        dice = 1;
        // Hide dice 2 through 5
        $("#dice2").hide();
        $("#dice3").hide();
        $("#dice4").hide();
        $("#dice5").hide();
        // Enable all buttons
        $(".rollBtn").prop("disabled", false);
        $(".addDiceBtn").prop("disabled", false);
        $(".clearDiceBtn").prop("disabled", false);
        getDice(dice);
    });

    function getDice(diceNum){
        var diceNum
        // Random number from 1 to 6 and show that die
        var randomDice = Math.ceil(Math.random()*6);
        switch(randomDice){
            case 1:
                $("#dot1"+diceNum).show();
                $("#dot2"+diceNum).hide();
                $("#dot3"+diceNum).hide();
                $("#dot4"+diceNum).hide();
                $("#dot5"+diceNum).hide();
                $("#dot6"+diceNum).hide();
                $("#dot7"+diceNum).hide();
                break;
            case 2:
                $("#dot1"+diceNum).hide();
                $("#dot2"+diceNum).show();
                $("#dot3"+diceNum).show();
                $("#dot4"+diceNum).hide();
                $("#dot5"+diceNum).hide();
                $("#dot6"+diceNum).hide();
                $("#dot7"+diceNum).hide();
                break;
            case 3:
                $("#dot1"+diceNum).show();
                $("#dot2"+diceNum).show();
                $("#dot3"+diceNum).show();
                $("#dot4"+diceNum).hide();
                $("#dot5"+diceNum).hide();
                $("#dot6"+diceNum).hide();
                $("#dot7"+diceNum).hide();
                break;
            case 4:
                $("#dot1"+diceNum).hide();
                $("#dot2"+diceNum).show();
                $("#dot3"+diceNum).show();
                $("#dot4"+diceNum).show();
                $("#dot5"+diceNum).show();
                $("#dot6"+diceNum).hide();
                $("#dot7"+diceNum).hide();
                break;
            case 5:
                $("#dot1"+diceNum).show();
                $("#dot2"+diceNum).show();
                $("#dot3"+diceNum).show();
                $("#dot4"+diceNum).show();
                $("#dot5"+diceNum).show();
                $("#dot6"+diceNum).hide();
                $("#dot7"+diceNum).hide();
                break;
            case 6:
                $("#dot1"+diceNum).hide();
                $("#dot2"+diceNum).show();
                $("#dot3"+diceNum).show();
                $("#dot4"+diceNum).show();
                $("#dot5"+diceNum).show();
                $("#dot6"+diceNum).show();
                $("#dot7"+diceNum).show();
                break;
            default:
                alert("Something went wrong!")
        }
    }
});