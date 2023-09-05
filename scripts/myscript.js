var SIZE = 10;
const boardCells = [];

function startTheGame() {
    var cell = document.createElement("button");
    let GAME_PLACE = document.getElementById("the-game-div");

    GAME_PLACE.style.width = `${SIZE * 45}px`;

    
    for(var i = 0; i < SIZE; i++){
        let cellsRow = [];
        for(var j = 0; j < SIZE; j++){
            cellsRow[j] = createCell(i, j, GAME_PLACE);
            
        }
        boardCells.push(cellsRow);
    }

    setCellsNumbers(boardCells);

    document.getElementById("welcome-menu").style.display = "none";
    GAME_PLACE.style.display = "flex";
}

function getCell(rowNum, colNum){
    return boardCells[rowNum][colNum];
}

function getSize(){
    return SIZE;
}
