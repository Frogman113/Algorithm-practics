/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(currentString, openCount, closeCount) {
        if (currentString.length === n * 2) {
            result.push(currentString);
            return;
        }

        if (openCount < n) {
            backtrack(currentString + "(", openCount + 1, closeCount);
        }

        if (closeCount < openCount) {
            backtrack(currentString + ")", openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};