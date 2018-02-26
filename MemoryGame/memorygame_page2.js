"use strict";

window.onload = init;

var model = {
    allCards: ['0C.png', '0D.png', '0H.png', '0S.png',
            '2C.png', '2D.png', '2H.png', '2S.png',
            '3C.png', '3D.png', '3H.png', '3S.png',
            '4C.png', '4D.png', '4H.png', '4S.png',
            '5C.png', '5D.png', '5H.png', '5S.png',
            '6C.png', '6D.png', '6H.png', '6S.png',
            '7C.png', '7D.png', '7H.png', '7S.png',
            '8C.png', '8D.png', '8H.png', '8S.png',
            '9C.png', '9D.png', '9H.png', '9S.png',
            'AC.png', 'AD.png', 'AH.png', 'AS.png',
            'JC.png', 'JD.png', 'JH.png', 'JS.png',
            'KC.png', 'KD.png', 'KH.png', 'KS.png',
            'QC.png', 'QD.png', 'QH.png', 'QS.png'],

    qtyCells: 18,
    numCards: 9,
    randomDeck: [],
    qtyOpenCards: 0,
    qtyClosedCards: 18,
    
    generateCardLocations: function() {
        var doublecardsInGame = [];
        var deckOfCards = this.allCards.length;

        //choose 9 cards by random
        for (var i=0; i < this.numCards; i++) {
            // from 0-8
            var eachCard = Math.floor(Math.random() * deckOfCards);
            doublecardsInGame[i] = this.allCards[eachCard];
            this.allCards.splice(eachCard, 1);
            deckOfCards--;
        }

        //create double array
        doublecardsInGame = doublecardsInGame.concat(doublecardsInGame);

        //create random double array
        var playingcards = this.qtyCells;
        for (var i=0; i < this.qtyCells; i++) {
            // from 0-17
            var eachCard = Math.floor(Math.random() * playingcards);
            this.randomDeck[i] = doublecardsInGame[eachCard];
            doublecardsInGame.splice(eachCard, 1);
            playingcards--;
        }
    },

    currentCard: 0,
    previousCard: 0,
    score: 0,

    soundClick: function(title) {
        var audio = new Audio();
        audio.src = title;
        audio.autoplay = true;
    },

    cardFlip: function(card) {
        if (!(card.classList.contains("card_flipped"))) {
            card.classList.add("card_flipped");
            card.setAttribute("data-tid", "Card-flipped");
            card.style.backgroundImage = "url('cards/" + model.randomDeck[card.id] + "')";
        }
        else {
            card.classList.remove("card_flipped");
            card.setAttribute("data-tid", "Card");
            card.style.backgroundImage = "url('cards/back.png')";
        }
    },

    compareCards: function() {
        if (model.currentCard.style.backgroundImage === model.previousCard.style.backgroundImage ) {
            model.currentCard.classList.add("disabled");
            model.previousCard.classList.add("disabled");
            model.currentCard = 0;
            model.previousCard = 0;
            model.qtyOpenCards += 2;
            model.qtyClosedCards -= 2;
            model.score += model.qtyClosedCards*42;
        } else {
            model.score -= model.qtyOpenCards*42;            
            setTimeout(function() { 
                model.cardFlip(model.currentCard);
                model.cardFlip(model.previousCard);
                model.currentCard = 0;
                model.previousCard = 0;              
                } , 300);
        }
        document.getElementById('score').innerHTML = this.score;
    }
}

function init() {
    model.generateCardLocations();

    [].forEach.call( document.getElementsByClassName("card"), function(card) {

        model.cardFlip(card);
        
        setTimeout(function() { 
            card.style.backgroundImage = "url('cards/back.png')"; 
            card.classList.remove("card_flipped");
            card.setAttribute("data-tid", "Card");       
            } , 5000);

        card.addEventListener("click", function () {

            if (!(card.classList.contains("card_flipped"))) {
                model.previousCard = model.currentCard;
                model.currentCard = card;
                model.cardFlip(card);
                model.soundClick('sound/bell.wav');
                
                if (model.previousCard != 0) {
                    model.compareCards();              

                    if (document.getElementsByClassName("disabled").length == model.qtyCells) {
                        model.soundClick('sound/tada.wav');
                        sessionStorage.setItem("finalscore", model.score);
                        setTimeout(function() {document.location.href='memorygame_page3.html';} , 1100);                                                  
                    }  
                }
            }
        });
    }); 
}