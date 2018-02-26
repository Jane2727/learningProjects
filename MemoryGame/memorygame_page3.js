"use strict";

    document.getElementById("finalScore").innerHTML = sessionStorage.getItem("finalscore");

    function reStartGame() {
        location.href = 'memorygame_page2.html';
    }
        
        var retryGame = document.getElementById("retryGame");
        retryGame.onclick = reStartGame;