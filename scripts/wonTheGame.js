function wonTheGame(){
    preventClicks();
    const gameStatus = document.getElementById("game-status");
    gameStatus.innerHTML = "YOU WON!";
    gameStatus.classList.add("won");
    document.body.style.backgroundColor = "#b9f8a0";
}

function preventClicks(){
    document.querySelectorAll("button").forEach(btn =>{
        btn.disabled = true;
    })
}