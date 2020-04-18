//This file contains some core functionalties
// HoOsH!! These are sensitives,do not touch
const log = console.log;
const clear = console.clear;
const readLine = require("readline-sync");
const color = require("colors/safe");

readLine.setDefaultOptions({
    prompt: 'Enter : ',
    limitMessage: "Only valid options works. Please try again."
});

const repeater = function (string, times) {
    return string.repeat(times);
};

const readInput = function (constraint) {
    return readLine.prompt({ limit: constraint });
};

module.exports = {
    log,
    clear,
    repeater,
    readInput,
    readLine,
    color
};