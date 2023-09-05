function createCell(rowNum, colNum, parent){
    const newCell = document.createElement("button");
    addClasses(newCell);
    addListeners(newCell, rowNum, colNum);
    return new Cell(rowNum, colNum, newCell, parent);
}

function addClasses(cell){
    cell.classList.add("cell");
    cell.classList.add("cell-unpressed");
}

function addListeners(cell, rowNum, colNum){
    cell.addEventListener("contextmenu", function(e){
        e.preventDefault();
        rightClick(rowNum, colNum);
    })
    cell.addEventListener("click", (e)=>{
        leftClick(rowNum, colNum);
    });
}

