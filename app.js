// select cells
const cells = document.querySelectorAll('.cell');
const board = document.getElementById('board')

//turns
let turn

//Players
const dwight = `<img src="images/dwight.png" height="200px">`;
const jim = `<img src="images/jim.png" height="200px">`;

//record plays
let jimsChoices = []
let dwightsChoices = []

// WINNING COMBOS
const win_combos = [
    [0, 1, 2],
    [2, 1, 0],
    [3, 4, 5],
    [5, 4, 3],
    [6, 7, 8],
    [8, 7, 6],
    [0, 3, 6],
    [6, 3, 0],
    [1, 4, 7],
    [7, 4, 1],
    [2, 5, 8],
    [8, 5, 2],
    [0, 4, 8],
    [8, 4, 0],
    [2, 4, 6],
    [6, 4, 2]
]

//winning text
let winningText;

startGame()

function startGame() {
    //add event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true }) //only does click event once
    })

    //switches turns
    function handleClick(e) {
        if (turn = !turn) {
            e.target.innerHTML = jim
            jimsChoices.push(+e.target.id) //push id as int too arr
            checkWin(win_combos, jimsChoices)
            winningText = `<div class="winning-message" style={padding-top: 0}><h1 class="winning-text">Jim...this one's for you!</h1> <img src="images/dundee.png" width="580"></div>`
        } else {
            e.target.innerHTML = dwight
            dwightsChoices.push(+e.target.id)
            checkWin(win_combos, dwightsChoices)
            dwightsChoices[i].style.backgroundColor = 'blue'
            winningText = `<div class="winning-message"><h1 class="winning-text"><b>Jim</b>...this one's for you!</h1> <img src="images/dundee.png" width="600"> <button></div>`
        }

        //compare player arrays to win arrays (determine winner)
        function checkWin(winnArr, playerArr) {
            let i, j, current; //initialize
            for (i = 0; i < winnArr.length; ++i) {
                if (playerArr.length === winnArr[i].length) {  //if the player arr = one of the winning arrs
                    current = winnArr[i];    //then save that arr in current
                    for (j = 0; j < playerArr.length && playerArr[j] === current[j]; ++j);
                    if (j === playerArr.length)
                        board.innerHTML = `${winningText}`;
                }
            }
            console.log("-1");
        }
    }
}
    // check for win
    // check for draw
    // switch turns





