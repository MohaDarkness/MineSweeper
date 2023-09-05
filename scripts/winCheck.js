function winCheck(){
    console.log("checking win..");
    let cell = null
    for(let i = 0; i < getSize(); i++){
        for(let j = 0; j < getSize(); j++){
            cell = getCell(i, j);
            if(!cell.isBomb && cell.dom.classList.contains("flagged-cell")){
                console.log("wew1");
                return false;
            }
            
            if(!cell.isBomb && cell.dom.classList.contains("cell-unpressed")){
                console.log(i + " " + j);
                console.log("wew2");
                return false;
            }

            if(cell.isBomb && !cell.dom.classList.contains("flagged-cell")){
                console.log("wew3");
                return false;
            }
        }
    }
    console.log("true");
    return true;
}