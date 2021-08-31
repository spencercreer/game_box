$(document).ready(function() {
    var deck
    var cardsRemaining

    function callCardsApi() {
        let queryURL = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then((res) => {
            deck = res.deck_id
            cardsRemaining = res.remaining
            console.log(deck)
        })
        .fail(() => console.log('Error: 404 not found'))
    }
    callCardsApi()

    $(".pickBtn").on("click",function(){
        console.log(deck)
        let queryURL = `http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then((res) => {
            console.log(res)
            $(".card").css("background-image", `url(${res.cards[0].image})`)
        })
        .fail(() => console.log('Error: 404 not found'))
    });

});