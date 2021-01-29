$(document).ready(function() {
    var coin = $(".coin-right");
    var wid = 100;
    $(".coinFlipBtn").on("click", function(){
        coinFlip = setInterval(function frame(){
            if(wid <= 0){
                clearInterval(coinFlip)
            }
            wid--;
            coin.width(wid);
        },10);
    })
})
