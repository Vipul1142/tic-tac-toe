const {
    log,
    readInput,
    readLine,
    color
} = require("./nucleas")
const {
    showTitle,
    welcomeScreen
} = require("./art")


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
    welcomeScreen();
    executeMenu(readMenuOption());
};

module.exports = {
    readMenuOption,
    executeMenu,
    welcomeScreen
};