const {
    welcomeScreen,
    executeMenu,
    readMenuOption
} = require("./src/manager")

function initGame() {
    welcomeScreen();
    executeMenu(readMenuOption());
}
initGame();