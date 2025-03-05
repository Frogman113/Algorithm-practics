/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let reversedStr = Math.abs(x).toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);

    if (reversedNum > 2**31 - 1) return 0;

    return isNegative ? -reversedNum : reversedNum;
};