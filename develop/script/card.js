$(document).ready(function() {
    var playingCards = ["joker", "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    var suites = ["hearts", "diamonds", "clubs", "spades"];

    $(".pickBtn").on("click",function(){
        console.log("hit");
        var suiteNum = Math.floor(Math.random()*4);
        var cardSuite = suites[suiteNum];
        console.log(cardSuite);
        var cardNum = Math.floor(Math.random()*14);
        var card = playingCards[cardNum];
        console.log(card);
        $(".cardFront").css("background-image", "url('../assets/" + card + "_" + cardSuite + ".JPG'")
    });
});