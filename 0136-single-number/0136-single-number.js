/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let countMap = {};

    for (let num of nums) {
        if (countMap[num] === undefined) {
            countMap[num] = 1;
        } else {
            countMap[num]++;
        }
    }

    for (let key in countMap) {
        if (countMap[key] === 1) {
            return Number(key);
        }
    }
};