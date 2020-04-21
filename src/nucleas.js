//This file contains some core functionalties
// HoOsH!! These are sensitives,do not touch
const log = console.log;
const clear = console.clear;
const tab = "\t\t\t\t"
const readLine = require("readline-sync");
const color = require("colors/safe");

readLine.setDefaultOptions({
    prompt: 'Choose : ',
    limitMessage: "Only valid options works. Please try again."
});

const repeater = function (string, times) {
    return string.repeat(times);
};

const arrayBuilder = function (char, size) {
    return new Array(size).fill(char);
};

const readInput = function (message, constraint) {
    log(message);
    return readLine.prompt({ limit: constraint });
};

const readMenuOption = function () {
    let message = "Choose menu option";
    return readInput(message, /^[0-3]$/g);
};

const readModeOption = function () {
    let message = tab + "1. Computer\t2. Friend";
    return readInput(message, /^[12]$/g);
};

const readSymbol = function (playerName) {
    let message = tab + playerName + " Choose your weapon X/O";
    return readInput(message, /^[xo]$/gi).toUpperCase();
};

const readName = function (message) {
    return readLine.question(message);
};

const swapValue = function (toCheck, first, second) {
    return (toCheck == first) ? second : first;
};

const swapSymbol = function (symbol) {
    return swapValue(symbol, "X", "O");
}

const swapPlayer = function (playerName) {
    return swapValue(playerName, "player1", "player2");
}

const readHumanBlockInput = function () {
    return readLine.keyIn("Choose Number : ", { limit: '$<1-9>' });
};

function getBotBlockInput() {
    return Math.ceil(Math.random() * 9);
}

const isBlockFree = function (boardData, selectedBlock) {
    if (boardData[selectedBlock] == " ") {
        return true;
    }
    else {
        log(" Block " + selectedBlock + " is already captured")
        return false;
    }
}

function getSelectedBlock(gameData, players, currentName, currentSymbol) {
    let selectedBlock
    do {
        if (players == 1) {
            selectedBlock = +getBotBlockInput();
        }
        else {
            log("\nIt's your turn " + currentName + " (" + currentSymbol + ")");
            log("Any number between 1 to 9");
            selectedBlock = +readHumanBlockInput();
        }
    } while (!isBlockFree(gameData, selectedBlock));
    return selectedBlock;
}

const createDataRow = function (space, data1, data2, data3) {
    return space + "| " + data1 + " | " + data2 + " | " + data3 + " |\n";
};

function joinBorder_Row(border, row1, row2, row3) {
    return border + row1 + border + row2 + border + row3 + border;
}

function createBoard(boardData) {
    const spaces = repeater(" ", 35);
    const borderLine = spaces + repeater("+---", 3) + "+\n";
    const dataRow1 = createDataRow(spaces, boardData[1], boardData[2], boardData[3]);
    const dataRow2 = createDataRow(spaces, boardData[4], boardData[5], boardData[6]);
    const dataRow3 = createDataRow(spaces, boardData[7], boardData[8], boardData[9]);
    return joinBorder_Row(borderLine, dataRow1, dataRow2, dataRow3);
}
const isWinCondition = function (first, second, third) {
    return (first == second && first == third && first != " ");
}
const winOrNot = function (gameBlock) {
    if (isWinCondition(gameBlock[1], gameBlock[2], gameBlock[3]){
        return true;
    }
    if (isWinCondition(gameBlock[4], gameBlock[5], gameBlock[6]) {
        return true;
    }
    if (isWinCondition(gameBlock[7], gameBlock[8], gameBlock[9]) {
        return true;
    }
    if (isWinCondition(gameBlock[1], gameBlock[4], gameBlock[7]) {
        return true;
    }
    if (isWinCondition(gameBlock[2], gameBlock[5], gameBlock[8]) {
        return true;
    }
    if (isWinCondition(gameBlock[3], gameBlock[6], gameBlock[9]) {
        return true;
    }
    if (isWinCondition(gameBlock[1], gameBlock[5], gameBlock[7]) {
        return true;
    }
    if (isWinCondition(gameBlock[1], gameBlock[5], gameBlock[9]) {
        return true;
    }
    return false;
}

module.exports = {
    log,
    clear,
    color,
    repeater,
    readLine,
    arrayBuilder,
    createBoard,
    swapSymbol,
    swapPlayer,
    readMenuOption,
    readModeOption,
    readSymbol,
    readName,
    winOrNot,
    getSelectedBlock
};