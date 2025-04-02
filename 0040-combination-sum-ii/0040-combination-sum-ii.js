/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);

    function backtrack(startIndex, currentSum, currentPath) {
        if (currentSum === target) {
            result.push([...currentPath]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (currentSum + candidates[i] > target) {
                break;
            }
            currentPath.push(candidates[i]);
            backtrack(i + 1, currentSum + candidates[i], currentPath);
            currentPath.pop();
        }
    }

    backtrack(0, 0, []);
    return result;
};