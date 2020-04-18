const {
    welcomeScreen
} = require("./draw")
const {
    readMenuOption,
    executeMenu
} = require("./nucleas")

function initGame() {
    welcomeScreen();
    executeMenu(readMenuOption());
}
initGame();