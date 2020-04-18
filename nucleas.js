//This file contains some core functionalties
// HoOsH!! These are sensitives,do not touch
const log = console.log;
const clear = console.clear;
const readLine = require("readline-sync");
readLine.setDefaultOptions({
    prompt: 'Enter : ',
    limitMessage: "Only valid option works. Please try again."
});

const repeater = function (string, times) {
    return string.repeat(times);
};

const readInput = function (constraint) {
    return readLine.prompt({ limit: constraint });
};

const readMenuOption = function () {
    let optionMsg = "Choose menu option";
    log(optionMsg);
    let selectedOption = readInput([1, 2, 3, 0]);
    return selectedOption;
};

const executeMenu = function (option) {
    const menu = {
        //1: functions,
        //2: functions,
        //3: functions,
        0: exitGame
    };
    menu[option]();
};

const exitGame = function () {
    let exitMsg = "Exit?";
    if (readLine.keyInYNStrict(exitMsg)) {
        process.exit();
    }
    executeMenu(readMenuOption());
};

module.exports = {
    repeater,
    log,
    clear,
    readInput,
    readMenuOption,
    executeMenu
}