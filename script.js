
// Gameboard
const gameboard = (() => {
    let board = [["x","o","o"],["o","x","x"],["x","o","x"]]
    const chooseField = (i,j) => {
        return board[i][j]
    }
    const updateField = (i, j, symbol) => {
        board[i][j] = symbol;
    }
    return {
      chooseField,
      updateField
    }
  })()

  //Player
  const player = (symbol) =>{
    
    const play = (i,j) => {
        gameboard.updateField(i,j, symbol) 
    }
    
    return {
        play,
    }
    };



  //Game control
  const control =(() =>{
    
    const playerX = player("x")
    const playerO = player("o")
    let currentPlayer = playerX

    const switchPlayer = () => {
        if(currentPlayer === playerX){
            currentPlayer = playerO
        } else {
            currentPlayer = playerX
        }
    }
    return {
        switchPlayer
    }
  })();

