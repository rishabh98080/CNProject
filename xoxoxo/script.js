let counter = 0;
const buttons = document.getElementsByClassName('checkButtons');
const winning_moves = [
    ["1","2","3"], ["4","5","6"], ["7","8","9"], // Rows
    ["1","4","7"], ["2","5","8"], ["3","6","9"], // Columns
    ["1","5","9"], ["3","5","7"]                 // Diagonals
];

let move_x = [];
let move_o = [];

// Helper function to check if a player has a winning combination
const checkWinner = (moves, player) => {
    for (let combo of winning_moves) {
        // Check if every number in a winning combo is present in the player's moves
        if (combo.every(val => moves.includes(val))) {
            alert(`${player} wins!`);
            const box = document.getElementById('others');
            box.style.backgroundColor = "lightgreen";
            disableAllButtons();
            return true;
        }
    }
    if (counter === 9) {
        alert("It's a draw!");
    }
    return false;
};

const disableAllButtons = () => {
    for (let btn of buttons) {
        btn.disabled = true;
    }
};

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
        const button_id = button.getAttribute('id').slice(4); // Get the number part
        button.style.color = "black";
        button.style.fontSize = "20px";
        if (counter % 2 == 0) {
            button.style.backgroundColor = "lightgreen";
            button.textContent = "X";

            move_x.push(button_id);
            counter++;
            button.disabled = true; // Disable immediately to prevent double-clicking
            checkWinner(move_x, "X");
        } else {
            button.style.backgroundColor = "lightblue";
            button.textContent = "O";
            move_o.push(button_id);
            counter++;
            button.disabled = true;
            checkWinner(move_o, "O");
        }
    });
}
