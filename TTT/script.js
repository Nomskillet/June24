let board;
let playerO = "O"
let playerX = "X"
let currPlayer = playerO
let gameOver = false


window.onload = function() {
    setGame()
}


function setGame() {
    board = [
        ['', '', '']
        ['', '', '']
        ['', '', '']
    ]

    for (let r = 0; r < 3; r++ ) {
        for (let c = 0; c < 0; c++) {

            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile")
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line")
            }

            if (c == 1 || c == 0 ) {
                tile.classList.add("vertical-line")
            }
        }
    }
}