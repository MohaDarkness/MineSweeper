class Cell {
    constructor(rowNum, colNum, dom, parent) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.dom = dom;
        this.isBomb = Math.random() * 10 <= 9? false : true;
        this.adjBombsNum = this.isBomb ? -1 : 0;
        this.flagged = false;

        dom.appendChild(document.createElement("h3"));
        parent.appendChild(this.dom);
    }

    getDom() {
        return this.dom;
    }

    isBomb() {
        return this.isBomb;
    }

    getPosition() {
        return `row ${this.rowNum}, column ${this.colNum}`;
    }

    increseAdjBombNumber() {
        this.adjBombsNum += 1;
    }

    appendTo = (parent) => {
        parent.appendChild(this.dom);
    }

    changeColor = (color) => {
        this.dom.style.backgroundColor = color;
    }
    updateNumberInside() {
        if(this.adjBombsNum != 0 && this.adjBombsNum != -1)
        this.dom.firstChild.innerHTML = this.adjBombsNum;
    }
    toggleFlag(){
        this.flagged = !this.flagged;
        if(this.flagged)
            this.dom.classList.add("flagged-cell");
        else
            this.dom.classList.remove("flagged-cell");
    }
}