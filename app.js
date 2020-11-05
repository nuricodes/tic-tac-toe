//////////////////////////////
// * INITIALIZE
//////////////////////////////

// initialize board/array that keeps track of the tic tac toe board
let origBoard;
// initialize players computer/YOU!
const computer = 'O';
const you = 'X';
// initialize the array of winning combinations
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// pull from the elements needed and store in variable 
const cells = document.querySelectorAll('.cell')
// invoke the starGame() function

//////////////////////////////
// * FUNCTIONS
//////////////////////////////

// Let's start with the startGame function 
const startGame = () => {
    // once game is reset we want the display to be gone again
    document.querySelector(".endgame").style.display = "none";
    // create the array of numbers 0-9 that stores in the below variable
    origBoard = Array.from(Array(9).keys());
    // loop through the cells 
    for (let i = 0; i < cells.length; i++) {
        // and mark sure they are cleared
        cells[i].innerText = '';
        // of styling too
        cells[i].style.removeProperty('background-color');
        // add an eventlistener to the cells
        cells[i].addEventListener('click', turnClick, false);
    }
}
const turnClick = (square) => {
    // console.log(square.target.id) (shows the id of the clicked div)
    // on the function 'turn' pass through the id of the boc we're clicking and X and the player who is clicking which is you
    turn(square.target.id, you)
}

const turn = (squareId, player) => {
    // on the board on the square that is clicked it will show the player who just took the turn
    origBoard[squareId] = player;
    // to see this we need to update the display's inner text to be the player or you
    document.getElementById(squareId).innerText = player;

    /////////////////////////////////////
    // * DETERMINE WINNER (ADD LOGIC)
    /////////////////////////////////////
    // gameWon checks the board array and see if the current player has won
    let gameWon = checkWin(origBoard, player)
    //  is game is won then game over
    if (gameWon) gameOver(gameWon)
}

const checkWin = (board, player) {
    // finds every index that the player has played in 
    // a=accumulator the value we get back at the end (initialized to empty array)
    // e=element in the board array that we're going through
    // i=index
    let plays = board.reduce((a, e, i) =>
        // if below then add the index to that array if not that return a as is
        (e === player)) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win]) //////////// (24:00)
}

startGame();