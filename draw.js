const {
    repeater,
    log,
    clear
} = require("./nucleas")

const color = require("colors/safe");

const newl = "\n";
const newt = "\t";

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
    optionMsg = "1.Play\t\t2.Stats\t\t3.Style\t\t0.Exit";
    log(repeater(newt, 5) + welcome + newl);
    log("\n\t\t  " + optionMsg);
    log();
}
module.exports = {
    showTitle,
    welcomeScreen
}