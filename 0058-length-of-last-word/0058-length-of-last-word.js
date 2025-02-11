/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let index = s.length - 1;

    while (index >= 0 && s[index] === ' ') {
        index--;
    }

    while (index >= 0 && s[index] !== ' ') {
        count++;
        index--;
    }

    return count;
};