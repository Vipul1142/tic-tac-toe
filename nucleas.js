//This file contains some core functionalties
// HoOsH!! These are sensitives,do not touch
const log = console.log;
const clear = console.clear;
const readLine = require("readline-sync");

const repeater = function (string, times) {
    return string.repeat(times);
};

const readOption = function (message) {
    return readLine.question(message);
};

const readMenuOption = function () {
    let optionMsg = "Choose menu option : ";
    let selectedOption = readOption(optionMsg);
    let invalidMsg = "Only 1, 2 and 3 works.\nPlease try again : ";
    while (selectedOption < 1 || selectedOption > 4) {
        selectedOption = readOption(invalidMsg);
    }
    return selectedOption;
};

const executeMenu = function (option) {
    const menu = {
        1: play,
        2: stat,
        3: style,
        0: exit
    };
    menu[option]();
};

module.exports = {
    repeater,
    log,
    clear,
    readOption,
    readMenuOption,
    executeMenu
}