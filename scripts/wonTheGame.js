function wonTheGame(){
    preventClicks();
    const gameStatus = document.getElementById("game-status");
    gameStatus.innerHTML = "YOU WON!";
    gameStatus.classList.add("won");
}

function preventClicks(){
    document.querySelectorAll("button").forEach(btn =>{
        btn.disabled = true;
    })
}