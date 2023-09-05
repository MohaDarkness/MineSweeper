function leftClick(rowNum, colNum) {
    console.log(rowNum + " " + colNum);

    const cell = getCell(rowNum, colNum);
    cell.getDom().classList.remove("cell-unpressed");
    cell.getDom().classList.add("cell-pressed");
    cell.getDom().classList.remove("flagged-cell");
    if (cell.isBomb) {
        cell.changeColor("red");
        lostTheGame();
    }
    else {
        expandCells(rowNum, colNum);
        if (winCheck())
            wonTheGame();
    }
}


function rightClick(rowNum, colNum) {
    const cell = getCell(rowNum, colNum);
    cell.toggleFlag();
    if (winCheck())
        wonTheGame();
}