/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    function backtrack(currentPermutation, remainingNums) {
        if (remainingNums.length === 0) {
            result.push([...currentPermutation]);
            return;
        }
        
        for (let i = 0; i < remainingNums.length; i++) {
            currentPermutation.push(remainingNums[i]);
            
            const newRemaining = [...remainingNums.slice(0, i), ...remainingNums.slice(i + 1)];
            backtrack(currentPermutation, newRemaining);
            
            currentPermutation.pop();
        }
    }
    
    backtrack([], nums);
    return result;
};