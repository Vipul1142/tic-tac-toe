//This file contains some core functionalties
//CAUTION : These are sensitives

const repeatText = function (string, times) {
    return string.repeat(times);
};
const joinText = function (string1, string2, times) {
    return (string1 + string2).repeat(times);
};


module.exports = {
    repeatText,
    joinText
}