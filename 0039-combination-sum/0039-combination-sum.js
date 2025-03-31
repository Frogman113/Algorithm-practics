/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const dp = Array(target + 1).fill().map(() => []);
    dp[0] = [[]];

    for (let num of candidates) {
        for (let t = num; t <= target; t++) {
            for (let comb of dp[t - num]) {
                dp[t].push([...comb, num]);
            }
        }
    }

    return dp[target];
};