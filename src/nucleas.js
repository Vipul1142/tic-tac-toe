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

const readInput = function (message, constraint) {
    log(message);
    return readLine.prompt({ limit: constraint });
};

const readMenuOption = function () {
    let message = "Choose menu option";
    let selectedOption = readInput(message, /^[0-3]$/g);
    return selectedOption;
};

const readModeOption = function () {
    let message = tab + "1. VS Human\t2. VS Bot";
    let selectedOption = readInput(message, /^[12]$/g);
    return selectedOption;
};

const readSymbol = function (name) {
    let message = tab + name + " Choose your weapon X/O";
    let selectedOption = readInput(message, /^[xo]$/gi);
    return selectedOption.toUpperCase();
};

const readName = function (message) {
    let name = readLine.question(message);
    return name;
};

const arrayBuilder = function (char, size) {
    return new Array(size).fill(char);
};

const createDataLine = function (space, data1, data2, data3) {
    let line = space + "| " + data1 + " | " + data2 + " | " + data3 + " |\n";
    return line;
};

const swapValue = function (key, first, second) {
    if (key == first) {
        return second;
    } else {
        return first;
    }
};

const swapSymbol = function (symbol) {
    return swapValue(symbol, "X", "O");
}

const swapPlayer = function (playerName) {
    return swapValue(symbol, "player1", "player2");
}

function createBoard(boardData) {
    const spc = repeater(" ", 35);
    const borderLine = spc + repeater("+---", 3) + "+\n";
    const dataLine1 = createDataLine(spc, boardData[1], boardData[2], boardData[3]);
    const dataLine2 = createDataLine(spc, boardData[4], boardData[5], boardData[6]);
    const dataLine3 = createDataLine(spc, boardData[7], boardData[8], boardData[9]);
    return borderLine + dataLine1 + borderLine + dataLine2 + borderLine + dataLine3 + borderLine;
}

module.exports = {
    log,
    clear,
    color,
    repeater,
    readLine,
    readInput,
    arrayBuilder,
    createDataLine,
    createBoard,
    swapSymbol,
    swapPlayer,
    readMenuOption,
    readModeOption,
    readSymbol,
    readName
};