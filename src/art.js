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
    log(tab + "____     ____    ____  ____   ____    ____  ____    ____");
    log(tab + " ||  || ||  ||    ||  ||  || ||  ||    ||  ||  || ||    ");
    log(tab + " ||  || ||    --- ||  ||==|| ||    --- ||  ||  || ||----");
    log(tab + " ||  || ||__||    ||  ||  || ||__||    ||  ||__|| ||____");
    log(repeater(tab, 4) + "By Vipul");
    log("\n\n");
}

function welcomeScreen(params) {
    showTitle();
    welcome = "WELCOME\n\n";
    optionMsg = "\t1. Play Game" + tab + "2. Show Stats" + tab + "3. Change Style" + tab + "0. Exit\n";
    log(repeater("\t", 5) + welcome);
    log(optionMsg);
}
module.exports = {
    showTitle,
    welcomeScreen,
    tab
}