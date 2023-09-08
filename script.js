
let clickedCelsP1 = []
let clickedCelsP2 = []
let endGame = false
const symbolX = "x"
const symbolO= "o"
let currentSymbol ="x"
let currentPlayer = clickedCelsP1
const winnerText = document.querySelector(".win")

const winningCombinations = [[1,2,3],[4,5,6],[7,8,9],
                             [1,4,7],[2,5,8],[3,6,9],
                             [1,5,9],[3,5,7]]

const nextSymbol = ()=>{
    if(currentSymbol == symbolX){
        currentSymbol = symbolO
    } else {
        currentSymbol = symbolX
    }
    return currentSymbol
}
const nextPlayer = () => {
    if(currentPlayer==clickedCelsP1){
        currentPlayer=clickedCelsP2
    } else {
        currentPlayer=clickedCelsP1
    }
    return currentPlayer
}

const isWinner = (winningCombinations, playArray) => {
    for (const winComb of winningCombinations) {
      if (winComb.every((el) => playArray.includes(el))) {
        return true; // Return true if a winning combination is found
      }
    }
    return false; // Return false if no winning combination is found in the playArray
  };

const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        let cellValue = cell.textContent
        if(cellValue == "" && endGame == false){
        currentPlayer.push(parseInt(cell.id)),
        cell.textContent = currentSymbol;
        let winner = isWinner(winningCombinations, currentPlayer);
        if(winner){
            if(clickedCelsP1 == currentPlayer){
                console.log("P1 wins")
                winnerText.textContent = "P1 -x- wins"
            } 
            if(clickedCelsP2 == currentPlayer){
                console.log("P2 wins")
                winnerText.textContent = "P2 -o- wins"
            }
            endGame = true
        }
        console.log(winner)
        nextSymbol(),
        nextPlayer(),
       console.log("P1: " + clickedCelsP1 + "  P2: " + clickedCelsP2)
        }
    }
    )})