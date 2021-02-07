$(document).ready(function() {
    // Randomly choose first die number
    var dice = 1;
    var m = 0;
    getDice(dice);

    // Roll button on click
    $(".rollBtn").on("click",function(){
        // Declare variables
        let diceOne=0, diceTwo=0, diceThree=0, diceFour=0, diceFive=0, diceSix=0;
        let diceOneProd=1, diceTwoProd=1, diceThreeProd=1, diceFourProd=1, diceFiveProd=1, diceSixProd=1;
        let product=0, sum=0;

        // Disable all buttons
        $(".rollBtn").prop("disabled", true);
        $(".addDiceBtn").prop("disabled", true);
        $(".addRedDiceBtn").prop("disabled", true);
        $(".addYellDiceBtn").prop("disabled", true);
        $(".addGreenDiceBtn").prop("disabled", true);
        $(".addBlueDiceBtn").prop("disabled", true);
        $(".clearDiceBtn").prop("disabled", true);

        // Interval function rollDice flashes dice values on screen
        var rollDice = setInterval(function() {
            switch(dice){
                case 1:
                    diceOne = getDice(1);
                    diceOneProd = diceOne;
                    break;
                case 2:
                    diceOne = getDice(1)
                    diceTwo = getDice(2)
                    diceOneProd = diceOne;
                    diceTwoProd = diceTwo;
                    break;
                case 3:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceOneProd = diceOne;
                    diceTwoProd = diceTwo;
                    diceThreeProd = diceThree;
                    break;
                case 4:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceFour = getDice(4);
                    diceOneProd = diceOne;
                    diceTwoProd = diceTwo;
                    diceThreeProd = diceThree;
                    diceFourProd = diceFour;
                    break;
                case 5:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceFour = getDice(4);
                    diceFive = getDice(5);
                    diceOneProd = diceOne;
                    diceTwoProd = diceTwo;
                    diceThreeProd = diceThree;
                    diceFourProd = diceFour;
                    diceFiveProd = diceFive;
                    break;
                case 6:
                    diceOne = getDice(1);
                    diceTwo = getDice(2);
                    diceThree = getDice(3);
                    diceFour = getDice(4);
                    diceFive = getDice(5);
                    diceSix = getDice(6);
                    diceOneProd = diceOne;
                    diceTwoProd = diceTwo;
                    diceThreeProd = diceThree;
                    diceFourProd = diceFour;
                    diceFiveProd = diceFive;
                    diceSixProd = diceSix;
                    break;
                default:
                    alert("Oops!")
            }
            m++; 

            if(m >= 15){
                dice
                sum = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
                product = diceOneProd * diceTwoProd * diceThreeProd * diceFourProd * diceFiveProd * diceSixProd;
                $(".diceSum").text("Sum: " + sum);
                $(".diceProduct").text("Product: " + product);
                // Enable all buttons
                $(".addDiceBtn").prop("disabled", false);
                $(".addRedDiceBtn").prop("disabled", false);
                $(".addYellDiceBtn").prop("disabled", false);
                $(".addGreenDiceBtn").prop("disabled", false);
                $(".addBlueDiceBtn").prop("disabled", false);
                $(".rollBtn").prop("disabled", false);
                $(".clearDiceBtn").prop("disabled", false);
                if(dice >= 6){
                    // Disable Add Dice Button if there are six dice
                    $(".addDiceBtn").prop("disabled", true);
                    $(".addRedDiceBtn").prop("disabled", true);
                    $(".addYellDiceBtn").prop("disabled", true);
                    $(".addGreenDiceBtn").prop("disabled", true);
                    $(".addBlueDiceBtn").prop("disabled", true);
                }
                // Exit rollDice interval function
                m = 0;
                clearInterval(rollDice);
            } 
        },200);
    });

    // Add button on click
    function addDice(){
        // Show next die in sequence
        dice++;
        $("#dice" + dice).show();
        getDice(dice);
        if(dice >= 6){
            // Disable Add Dice Button if there are six dice
            $(".addDiceBtn").prop("disabled", true);
            $(".addRedDiceBtn").prop("disabled", true);
            $(".addYellDiceBtn").prop("disabled", true);
            $(".addGreenDiceBtn").prop("disabled", true);
            $(".addBlueDiceBtn").prop("disabled", true);
        }
    }

    // Clear button on click
    $(".clearDiceBtn").on("click",function(){
        // Hide dice 2 through 6
        $("#dice2").hide();
        $("#dice3").hide();
        $("#dice4").hide();
        $("#dice5").hide();
        $("#dice6").hide();

        for(let i = 1; i < 7; i++){
            $("#dice" + i).removeClass("redDice yellDice greenDice blueDice");
            $("#dot1" + i).removeClass("whiteDot");
            $("#dot2" + i).removeClass("whiteDot");
            $("#dot3" + i).removeClass("whiteDot");
            $("#dot4" + i).removeClass("whiteDot");
            $("#dot5" + i).removeClass("whiteDot");
            $("#dot6" + i).removeClass("whiteDot");
            $("#dot7" + i).removeClass("whiteDot");
        }

        // Enable all buttons
        $(".rollBtn").prop("disabled", false);
        $(".addDiceBtn").prop("disabled", false);
        $(".addRedDiceBtn").prop("disabled", false);
        $(".addYellDiceBtn").prop("disabled", false);
        $(".addGreenDiceBtn").prop("disabled", false);
        $(".addBlueDiceBtn").prop("disabled", false);
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
    $(".addDiceBtn").click(function(){
        addDice();
    })
    $(".addRedDiceBtn").click(function(){
        addDice();
        $("#dice" + dice).addClass("redDice");
        $("#dot1" + dice).addClass("whiteDot");
        $("#dot2" + dice).addClass("whiteDot");
        $("#dot3" + dice).addClass("whiteDot");
        $("#dot4" + dice).addClass("whiteDot");
        $("#dot5" + dice).addClass("whiteDot");
        $("#dot6" + dice).addClass("whiteDot");
        $("#dot7" + dice).addClass("whiteDot");
    })
    $(".addYellDiceBtn").click(function(){
        addDice();
        $("#dice" + dice).addClass("yellDice");
        $("#dot1" + dice).addClass("whiteDot");
        $("#dot2" + dice).addClass("whiteDot");
        $("#dot3" + dice).addClass("whiteDot");
        $("#dot4" + dice).addClass("whiteDot");
        $("#dot5" + dice).addClass("whiteDot");
        $("#dot6" + dice).addClass("whiteDot");
        $("#dot7" + dice).addClass("whiteDot");
    })
    $(".addGreenDiceBtn").click(function(){
        addDice();
        $("#dice" + dice).addClass("greenDice");
        $("#dot1" + dice).addClass("whiteDot");
        $("#dot2" + dice).addClass("whiteDot");
        $("#dot3" + dice).addClass("whiteDot");
        $("#dot4" + dice).addClass("whiteDot");
        $("#dot5" + dice).addClass("whiteDot");
        $("#dot6" + dice).addClass("whiteDot");
        $("#dot7" + dice).addClass("whiteDot");
    })
    $(".addBlueDiceBtn").click(function(){
        addDice();
        $("#dice" + dice).addClass("blueDice");
        $("#dot1" + dice).addClass("whiteDot");
        $("#dot2" + dice).addClass("whiteDot");
        $("#dot3" + dice).addClass("whiteDot");
        $("#dot4" + dice).addClass("whiteDot");
        $("#dot5" + dice).addClass("whiteDot");
        $("#dot6" + dice).addClass("whiteDot");
        $("#dot7" + dice).addClass("whiteDot");
    })
});