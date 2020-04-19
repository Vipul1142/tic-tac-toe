const {
    readLine,
    log,
    readInput,
    color,
    repeater,
    arrayBuilder,
    createBoard
} = require("./nucleas")
const {
    showTitle,
    welcomeScreen
} = require("./art")
const tab = "\t\t\t\t";

const readMenuOption = function () {
    let optionMsg = "Choose menu option";
    log(optionMsg);
    let selectedOption = readInput(/^[0-3]$/g);
    return selectedOption;
};

const readModeOption = function () {
    let message = tab + "1. VS Human\t2. VS Bot";
    log(message);
    let selectedOption = readInput(/^[12]$/g);
    return selectedOption;
};

const readSymbol = function () {
    let message = tab + "Choose your weapon X/O";
    log(message);
    let selectedOption = readInput(/^[xo]$/gi);
    return selectedOption.toUpperCase();
};

const readName = function (message) {
    let name = readLine.question(message);
    return name;
};

const updateScreen = function (game) {
    showTitle();
    log(game.frame);
};

const readPlayerName = function (game) {
    game.player1.name = readName("Enter your name : ");
    if (game.mode == 1) {
        game.player2.name = readName("Enter your friend's name : ");
    }
    else {
        game.player2.name = "Bot";
    }
    return game;
};

const executeMenu = function (option) {
    const menu = {
        1: playGame,
        //2: functions,
        //3: functions,
        0: exitGame,
    };
    menu[option]();
};

const startGame = function (game) {
    updateScreen(game);
};

const exitGame = function () {
    let exitMsg = "Exit?";
    if (readLine.keyInYNStrict(exitMsg)) {
        process.exit();
    }
    welcomeScreen();
    executeMenu(readMenuOption());
};

const getGameInfo = function (game) {
    game.data = arrayBuilder(" ", 10);
    game.frame = createBoard(game.data);
    game.mode = readModeOption();
    game.player1 = { name: "", symbol: "", inputs: [] };
    game.player2 = { name: "", symbol: "", inputs: [] };
    game = readPlayerName(game);
    game.symbol = readSymbol()
    return game;
}

const playGame = function () {
    showTitle();
    let game = {};
    game = getGameInfo(game);
    startGame(game);
}

module.exports = {
    readMenuOption,
    executeMenu,
    welcomeScreen,
    playGame
};