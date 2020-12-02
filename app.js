// select cells
const cells = document.querySelectorAll('.cell');

//turn
let turn

//Players
const dwight = `<img src="images/dwight.png" height="200px">`;
const jim = `<img src="images/jim.png" height="200px">`

//add event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true }) //only does click event once
})

function handleClick(e) {
    if (turn = !turn) {
        e.target.innerHTML = jim
    } else {
        e.target.innerHTML = dwight
    }
}
    // place mark
    // check for win
    // check for draw
    // switch turns





