const {
    welcomeScreen,
    readMenuOption,
    startGame,
    wipMessage,
    exitGame
} = require("./src/manager")

function init() {
    while (1) {
        welcomeScreen();
        let selectedMenuOption = Number(readMenuOption());
        switch (selectedMenuOption) {
            case 1:
                startGame();
                break;
            case 2:
                wipMessage();
                break;
            case 3:
                wipMessage();
                break;
            case 0:
                exitGame();
                break;
        }
    }
}
init();