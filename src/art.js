const chalk = require("chalk");
const {
    clear,
    color,
    log,
    repeater
} = require("./nucleas")
let tab = "\t\t";

function showTitle() {
    clear();
    log("\n\n")
    log(tab + chalk.blue("____     ____    ____  ____   ____    ____  ____    ____"));
    log(tab + chalk.yellow(" ||  || ||  ||    ||  ||  || ||  ||    ||  ||  || ||    "));
    log(tab + chalk.magentaBright(" ||  || ||    --- ||  ||==|| ||    --- ||  ||  || ||----"));
    log(tab + chalk.blue(" ||  || ||__||    ||  ||  || ||__||    ||  ||__|| ||____"));
    log(repeater(tab, 4) + "By Vipul");
    log("\n\n");
}

function welcomeScreen(params) {
    showTitle();
    welcome = chalk.green.bold.italic.bgRed(" W E L C O M E \n\n");
    optionMsg = chalk.yellow("\t   1. Play Game    2. Show Stats     3. Change Style     0. Exit\n");
    log(repeater("\t", 5) + welcome);
    log(optionMsg);
}
module.exports = {
    showTitle,
    welcomeScreen
}