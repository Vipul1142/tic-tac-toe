const color = require("colors");
const {
    repeatText,
    joinText
} = require("./nucleas.js");

const log = console.log;

const border = repeatText("+---", 3) + "+\n";
const line = repeatText("|   ", 3) + "|\n";
const board = joinText(border.red, line.yellow, 3) + border.red;

log(board);