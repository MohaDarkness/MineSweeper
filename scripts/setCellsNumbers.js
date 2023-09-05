let board;
function setCellsNumbers(theBoard) {
    //iterate the whole board if you find a bomb then encrease the numbers
    //of adjancent cells by one (only if they are not bombs as well).
    board = theBoard;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j].isBomb) {
                if (i > 0) {
                    increaseThis(i-1, j); //up
                    if (j > 0)
                        increaseThis(i-1, j-1); //up-left

                    if (j < board.length - 1)
                        increaseThis(i-1, j+1); //up-right
                }

                if (i < board.length - 1) {
                    increaseThis(i+1, j);
                    if (j > 0)
                        increaseThis(i+1, j-1);

                    if (j < board.length - 1)
                        increaseThis(i+1,j+1);
                }

                if (j > 0)
                    increaseThis(i, j-1);

                if (j < board.length - 1)
                    increaseThis(i, j+1);
            }
        }
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++)
            board[i][j].updateNumberInside();
    }

}

function increaseThis(rowNum, colNum){
    console.log("This is " + rowNum + ", " + colNum);
    if(!board[rowNum][colNum].isBomb){
        board[rowNum][colNum].increseAdjBombNumber();
    }
}