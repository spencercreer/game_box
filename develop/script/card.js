$(document).ready(function () {
    var deckCount
    var deck
    var cardsRemaining

    $("#pickBtn").on("click", function () {
        console.log(deck)
        let queryURL = `http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .then((res) => {
                console.log(res)
                let playingCards = $("#playingCards")
                let newCard = $('<img class="card">')
                newCard.css("background-image", `url(${res.cards[0].image})`)
                console.log(newCard)
                playingCards.append(newCard)
            })
            .fail(() => console.log('Error: 404 not found'))
    });

    $("#shuffleBtn").on("click", function () {
        console.log("Shuffle")
    });

    function getCardDeck() {
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
    getCardDeck()
});