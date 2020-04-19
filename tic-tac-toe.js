const {
    welcomeScreen,
    executeMenuOption,
    readMenuOption
} = require("./src/manager")

function initGame() {
    welcomeScreen();
    executeMenuOption(readMenuOption());
}
initGame();