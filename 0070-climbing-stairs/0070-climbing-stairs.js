/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let prev1 = 2, prev2 = 1;
    
    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};