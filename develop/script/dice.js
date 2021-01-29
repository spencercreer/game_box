$(document).ready(function() {
    // Randomly choose die one number
    var dice = 1;
    getDice(dice);

    // Roll button on click
    $(".rollBtn").on("click",function(){
        // Declare variables
        let m=0;
        let diceOne=0, diceTwo=0, diceThree=0, diceFour=0, diceFive=0;
        let product=0, sum=0;

        // Disable all buttons
        $(".rollBtn").prop("disabled", true);
        $(".addDiceBtn").prop("disabled", true);
        $(".clearDiceBtn").prop("disabled", true);

        // Interval function rollDice flashes dice values on screen
        var rollDice = setInterval(function() {
            switch(dice){
                case 1:
                    diceOne = getDice(1);
                    break;
                case 2:
                    diceOne = getDice(1)
                    diceTwo = getDice(2)
                    break;
                case 3:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    break;
                case 4:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceFour = getDice(4);
                    break;
                case 5:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceFour = getDice(4);
                    diceFive = getDice(5);
                    break;
                default:
                    alert("Oops!")
            }
            m++; 

            if(m >= 15){
                sum = diceOne + diceTwo + diceThree + diceFour + diceFive;
                product = diceOne * diceTwo * diceThree * diceFour * diceFive;
                $(".diceSum").text("Sum: " + sum);
                $(".diceProduct").text("Product: " + product);
                console.log(sum);
                console.log(product);
                // Enable all buttons
                $(".addDiceBtn").prop("disabled", false);
                $(".rollBtn").prop("disabled", false);
                $(".clearDiceBtn").prop("disabled", false);
                if(dice >= 5){
                    // Disable Add Dice Button if there are five dice
                    $(".addDiceBtn").prop("disabled", true);
                }
                // Exit rollDice interval function
                clearInterval(rollDice);
            } 
        },200);
    });

    // Add button on click
    $(".addDiceBtn").on("click",function(){
        // Show next die in sequence
        dice++;
        $("#dice" + dice).show();
        getDice(dice);
        if(dice >= 5){
            // Disable Add Dice Button if there are five dice
            $(".addDiceBtn").prop("disabled", true);}
    });

    // Clear button on click
    $(".clearDiceBtn").on("click",function(){
        // Hide dice 2 through 5
        $("#dice2").hide();
        $("#dice3").hide();
        $("#dice4").hide();
        $("#dice5").hide();

        // Enable all buttons
        $(".rollBtn").prop("disabled", false);
        $(".addDiceBtn").prop("disabled", false);
        $(".clearDiceBtn").prop("disabled", false);

        // Randomly choose die one number
        dice = 1;
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
        return randomDice;
    }
});