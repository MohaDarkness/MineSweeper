function lostTheGame() {
    exposeBombs();
    preventClicks();
    const gameStatus = document.getElementById("game-status");
    gameStatus.innerHTML = "YOU LOST!";
    gameStatus.classList.add("lost");
    // document.body.style.backgroundColor = "#f1363661";
    document.body.style.backgroundColor = "#ffc3c3";
}

function exposeBombs() {
    for (let i = 0; i < getSize(); i++) {
        for (let j = 0; j < getSize(); j++) {
            let cell = getCell(i, j);
            if(cell.isBomb){
                cell.getDom().classList.remove("cell-unpressed");
                cell.getDom().classList.add("cell-pressed");
                cell.getDom().style.backgroundColor = "rgb(223, 105, 105)";
                cell.getDom().firstChild.innerHTML = "💣";
                
            }
        }
    }
}

function preventClicks(){
    document.querySelectorAll("button").forEach(btn =>{
        btn.disabled = true;
    })
}