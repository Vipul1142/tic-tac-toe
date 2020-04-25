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
    winOrNot,
    getSelectedBlock
} = require("./nucleas")
const {
    showTitle,
    welcomeScreen
} = require("./art")

const updateScreen = function (board) {
    showTitle();
    log(board);
};

const showWinner = function (winnerName) {
    log(winnerName + " WON this match");
};

const buildReMatchGame = function (game) {
    game.data = arrayBuilder(" ", 10);
    game.frame = createBoard(game.data);
    //game.mode = readModeOption();
    //game.player1 = { name: "", symbol: "", inputs: [] };
    //game.player2 = { name: "Computer", symbol: "", inputs: [] };
    //game.player1.name = readName("Enter your name : ");
    //if (game.mode == 2) {
    //    game.player2.name = readName("Enter your friend's name : ");
    //}
    game.player1.inputs = game.player2.inputs = [];
    game.player1.symbol = readSymbol(game.player1.name);
    game.player2.symbol = swapSymbol(game.player1.symbol);
    game.turn = "player1";
    return game;
}

const playGame = function (game) {
    let blocksLeft = 9;
    updateScreen(game.frame);
    while (blocksLeft--) {
        const currentName = game[game.turn].name;
        const currentSymbol = game[game.turn].symbol;
        let selectedBlock = getSelectedBlock(game.data, currentName, currentSymbol);
        game.data[selectedBlock] = currentSymbol;
        game.frame = createBoard(game.data);
        game[game.turn].inputs.push(selectedBlock);
        updateScreen(game.frame);
        log(currentName + "(" + currentSymbol + ") selected " + selectedBlock);
        if (winOrNot(game.data)) {
            showWinner(currentName);
            break;
        }
        game.turn = swapPlayer(game.turn);
    }
    if (!winOrNot(game.data)) {
        log("It's a draw");
    }
    const isReMatch = readLine.keyInYNStrict("Do you want a rematch");
    if (isReMatch) {
        game = buildReMatchGame(game);
        playGame(game);
    }
}

const buildGame = function (game) {
    game.data = arrayBuilder(" ", 10);
    game.frame = createBoard(game.data);
    game.mode = readModeOption();
    game.player1 = { name: "", symbol: "", inputs: [] };
    game.player2 = { name: "Computer", symbol: "", inputs: [] };
    game.player1.name = readName("Enter your name : ");
    if (game.mode == 2) {
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
};

const wipMessage = function () {
    log("This functionality is currently under WIP");
    log("You can play the game meanwhile\nOr choose EXITs next time 😆 😉");
    readLine.keyIn("Press any character key");
}
module.exports = {
    readMenuOption,
    welcomeScreen,
    startGame,
    exitGame,
    wipMessage
};