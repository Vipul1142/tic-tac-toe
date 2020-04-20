const {
    readLine,
    log,
    arrayBuilder,
    createBoard,
    swapPlayer,
    swapSymbol,
    readMenuOption,
    readModeOption,
    readSymbol,
    readName,
    getSelectedBlock
} = require("./nucleas")
const {
    showTitle,
    welcomeScreen,
    tab
} = require("./art")

const updateScreen = function (board) {
    showTitle();
    log(board);
};

const playGame = function (game) {
    let blocksLeft = 9;
    updateScreen(game.frame);
    while (blocksLeft--) {
        const currentName = game[game.turn].name;
        const currentSymbol = game[game.turn].symbol;
        let selectedBlock = getSelectedBlock(game.data, currentName, currentSymbol);
        game.data[selectedBlock] = currentSymbol;
        game.frame = createBoard(game.data);
        updateScreen(game.frame);
        log(currentName + " selected " + selectedBlock);
        game.turn = swapPlayer(game.turn);
    }
}

const buildGame = function (game) {
    game.data = arrayBuilder(" ", 10);
    game.frame = createBoard(game.data);
    game.mode = readModeOption();
    game.player1 = { name: "", symbol: "", inputs: [] };
    game.player2 = { name: "bot", symbol: "", inputs: [] };
    game.player1.name = readName("Enter your name : ");
    if (game.mode == 1) {
        game.player2.name = readName("Enter your friend's name : ");
    }
    game.player1.symbol = readSymbol(game.player1.name);
    game.player2.symbol = swapSymbol(game.player1.symbol);
    game.turn = "player1";
    return game;
}

const startGame = function () {
    showTitle();
    let game = {};
    game = buildGame(game);
    playGame(game);
};

const exitGame = function () {
    let exitMsg = "Exit?";
    if (readLine.keyInYNStrict(exitMsg)) {
        process.exit();
    }
    welcomeScreen();
    executeMenuOption(readMenuOption());
};

const executeMenuOption = function (selectedOption) {
    const menu = {
        1: startGame,
        //2: functions,
        //3: functions,
        0: exitGame,
    };
    menu[selectedOption]();
};

module.exports = {
    readMenuOption,
    executeMenuOption,
    welcomeScreen
};