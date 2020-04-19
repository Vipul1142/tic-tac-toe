const {
    clear,
    color,
    log,
    repeater
} = require("./nucleas")

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
    log(newl + newl);
}

function welcomeScreen(params) {
    showTitle();
    welcome = "   WELCOME";
    optionMsg = "1. Play Game\t\t2. Show Stats\t\t3. Change Style\t\t0. Exit";
    log(repeater(newt, 5) + welcome + newl);
    log("\n\t" + optionMsg);
    log();
}
module.exports = {
    showTitle,
    welcomeScreen
}