const {
    repeater
} = require("./nucleas")
const color = require("colors/safe");


const log = console.log;
const clear = console.clear;
const newl = "\n";
const newt = "\t";
const spc = " ";

//const border = repeater("+---", 3) + "+\n";
//const line = repeater("| x ", 3) + "|\n";
//const board = repeater((border + line), 3) + border;
//log(board);

function showTitle() {
    clear();
    log("\n\n")
    log("\t\t" + "____       ____    ____   ____    ____    ____   ____     ____");
    log("\t\t" + " ||   ||  ||  ||    ||   ||  ||  ||  ||    ||   ||  ||  ||    ");
    log("\t\t" + " ||   ||  ||        ||   ||==||  ||        ||   ||  ||  ||----");
    log("\t\t" + " ||   ||  ||__||    ||   ||  ||  ||__||    ||   ||__||  ||____");
    log(repeater(newt, 9) + "By Vipul");
    log();
}

function welcomeScreen(params) {
    showTitle();
    welcome = "   WELCOME";
    optionMsg = "1.Play\t\t2.Stats\t\t3.Style\t\t4.Exit";
    log(repeater(newt, 5) + welcome + newl);
    log("\n\t\t  " + optionMsg);
    log();
}
module.exports = {
    showTitle,
    welcomeScreen,
    log,
    clear
}