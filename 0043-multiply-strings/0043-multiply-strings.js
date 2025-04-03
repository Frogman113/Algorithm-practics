/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let digit1 = num1.charCodeAt(i) - 48;
            let digit2 = num2.charCodeAt(j) - 48;
            let product = digit1 * digit2;
            let pos1 = i + j;
            let pos2 = i + j + 1;
            let sum = product + result[pos2];

            result[pos2] = sum % 10;
            result[pos1] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
};