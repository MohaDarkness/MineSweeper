function lostTheGame() {
    exposeBombs();
    preventClicks();
    const gameStatus = document.getElementById("game-status");
    gameStatus.innerHTML = "YOU LOST!";
    gameStatus.classList.add("lost");
}

function exposeBombs() {
    for (let i = 0; i < getSize(); i++) {
        for (let j = 0; j < getSize(); j++) {
            let cell = getCell(i, j);
            if(cell.isBomb){
                cell.getDom().style.backgroundColor = "red";
            }
        }
    }
}

function preventClicks(){
    document.querySelectorAll("button").forEach(btn =>{
        btn.disabled = true;
    })
}