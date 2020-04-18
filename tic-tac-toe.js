const {
    welcomeScreen
} = require("./src/art")
const {
    readMenuOption,
    executeMenu
} = require("./src/nucleas")

function initGame() {
    welcomeScreen();
    executeMenu(readMenuOption());
}
initGame();