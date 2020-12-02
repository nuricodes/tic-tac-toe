// select cells
const cells = document.querySelectorAll('.cell');
const board = document.getElementById('board');

//turn
let turn

//Players
const dwight = `<img src="images/dwight.png" height="200px">`;
const jim = `<img src="images/jim.png" height="200px">`

// WINNING COMBOS
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//store jims choices
let jimsChoices = []

//store dwights choices
let dwightsChoices = []



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
            jimsChoices.push(+e.target.id) //push id as int
        } else {
            e.target.innerHTML = dwight
            dwightsChoices.push(+e.target.id)
        }
    }


}
    // check for win
    // check for draw
    // switch turns





