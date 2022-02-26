$(document).ready(function () {
    var deckCount
    var deck
    var cardsRemaining
    var cardPosition = 0

    $("#pickBtn").on("click", function () {
        console.log(deck)
        let queryURL = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .then((res) => {
                console.log(res)
                let playingCards = $("#playingCards")
                let newCard = $(`<img class="card" style="left: ${cardPosition}px">`)
                newCard.css("background-image", `url(${res.cards[0].image})`)
                playingCards.append(newCard)
                //fix cards going off page
                cardPosition += 30
            })
            .fail(() => console.log('Error: 404 not found'))
    });

    $("#shuffleBtn").on("click", function () {
        console.log("Shuffle")
    });

    function getCardDeck() {
        let queryURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
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
    getCardDeck()
});