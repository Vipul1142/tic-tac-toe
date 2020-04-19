const {
    clear,
    color,
    log,
    repeater
} = require("./nucleas")

function showTitle() {
    clear();
    log("\n\n")
    log("\t\t" + "____     ____    ____  ____   ____    ____  ____    ____");
    log("\t\t" + " ||  || ||  ||    ||  ||  || ||  ||    ||  ||  || ||    ");
    log("\t\t" + " ||  || ||    --- ||  ||==|| ||    --- ||  ||  || ||----");
    log("\t\t" + " ||  || ||__||    ||  ||  || ||__||    ||  ||__|| ||____");
    log(repeater("\t", 8) + "By Vipul");
    log("\n\n");
}

function welcomeScreen(params) {
    showTitle();
    welcome = "WELCOME\n\n";
    optionMsg = "\t1. Play Game\t\t2. Show Stats\t\t3. Change Style\t\t0. Exit\n";
    log(repeater("\t", 5) + welcome);
    log(optionMsg);
}
module.exports = {
    showTitle,
    welcomeScreen
}