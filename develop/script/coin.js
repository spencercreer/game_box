$(document).ready(function() {
    var coin = $(".coin");
    var j = 0
    $(".coinFlipBtn").on("click", function(){
        coinFlip = setInterval(function frame(){
            coin.addClass("coinSpin");
            j++;
            if(j>5){
                coin.removeClass("coinSpin")
                clearInterval(coinFlip)
            }
        },1000);
    })
})
