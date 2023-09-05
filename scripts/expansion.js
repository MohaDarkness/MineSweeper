const queue = [];

function expandCells(rowNum, colNum) {
    queue.push(getCell(rowNum, colNum));

    while (queue.length > 0) {
        cell = queue[0];
        cell.dom.disabled = true;
        cell.dom.classList.remove('cell-unpressed');
        cell.dom.classList.add('cell-pressed');
        if (cell.adjBombsNum == 0) {
            r = cell.rowNum;
            c = cell.colNum;
            push(r - 1, c);
            push(r - 1, c + 1);
            push(r - 1, c - 1);
            push(r, c + 1);
            push(r, c - 1);
            push(r + 1, c);
            push(r + 1, c + 1);
            push(r + 1, c - 1);
        }
        queue.shift();

    }

}


function push(rowNum, colNum) {
    if (rowNum < 0 || colNum < 0 || rowNum >= getSize() || colNum >= getSize())
        return;

    let cell = getCell(rowNum, colNum);
    if (cell.isBomb)
        return 

    if(cell.dom.classList.contains("cell-pressed"))
        return
    
    queue.push(cell);
}