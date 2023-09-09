
let clickedCelsP1 = []
let clickedCelsP2 = []
let endGame = false
const symbolX = "x"
const symbolO= "o"
let currentSymbol ="x"
let currentPlayer = clickedCelsP1
const winnerText = document.querySelector(".win")
winnerText.textContent = " "
const playAgain = document.querySelector(".play-again")
let pointsP1 = 0
let pointsP2 = 0
let playerOneName = "player one"
let playerTwoName = "player two"
let score = document.querySelector(".score")
console.log(playerOneName)
const readyButton = document.querySelector(".ready-btn")
const playerTurn = document.querySelector(".turn")
playerTurn.textContent = playerOneName+"'s turn"

readyButton.addEventListener("click", () => {
    playerOneName = document.getElementById("player-one-name").value
    playerTwoName = document.getElementById("player-two-name").value
    playerTurn.textContent = playerOneName+"'s turn"
})



const winningCombinations = [[1,2,3],[4,5,6],[7,8,9],
                             [1,4,7],[2,5,8],[3,6,9],
                             [1,5,9],[3,5,7]]


const nextSymbol = () => {
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
        playerTurn.textContent = playerTwoName+"'s turn"
    } else {
        currentPlayer=clickedCelsP1
        playerTurn.textContent = playerOneName+"'s turn"
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
                winnerText.textContent = playerOneName +" wins"
                pointsP1++
            } 
            if(clickedCelsP2 == currentPlayer){
                console.log("P2 wins")
                winnerText.textContent = playerTwoName + " wins"
                pointsP2++
            }
            endGame = true
            score.textContent = playerOneName +" "+ pointsP1 + " : " + pointsP2 + " " + playerTwoName
            playAgain.classList.add("btn-visible")
        }
        if(clickedCelsP1.length > 4){
            winnerText.textContent = "DRAW"
            endGame = true
            playAgain.classList.add("btn-visible")
        }
        nextSymbol()
        nextPlayer()
        }
    }
    )})

    // Play again button shown at the end of each round
    playAgain.addEventListener("click", () => {
 clickedCelsP1 = []
 clickedCelsP2 = []
 endGame = false
 currentSymbol ="x"
 currentPlayer = clickedCelsP1
 playerTurn.textContent = playerOneName+"'s turn"
 resetBoard()
    })

    const resetBoard = () => {
        cells.forEach(cell => {
            cell.textContent = ""
            winnerText.textContent = ""
            playAgain.classList.remove("btn-visible")
        })
    }




   