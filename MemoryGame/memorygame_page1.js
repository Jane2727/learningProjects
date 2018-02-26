"use strict";

function startGame() {
    location.href = 'memorygame_page2.html';
}
    
    var newGame = document.getElementById("newGame");
    newGame.onclick = startGame;