/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;
    
    let isNegative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;
    
    while (a >= b) {
        let temp = b;
        let count = 1;
        
        while (a >= temp + temp) {
            temp += temp;
            count += count;
        }
        
        a -= temp;
        result += count;
    }
    
    return isNegative ? -result : result;
};
