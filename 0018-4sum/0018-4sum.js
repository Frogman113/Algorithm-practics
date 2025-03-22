/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(numbers, target) {
    numbers.sort((a, b) => a - b);
    const result = [];
    const length = numbers.length;

    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && numbers[i] === numbers[i - 1]) continue;

        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && numbers[j] === numbers[j - 1]) continue;

            let left = j + 1;
            let right = length - 1;

            while (left < right) {
                const total = numbers[i] + numbers[j] + numbers[left] + numbers[right];

                if (total === target) {
                    result.push([numbers[i], numbers[j], numbers[left], numbers[right]]);
                    left++;
                    right--;

                    while (left < right && numbers[left] === numbers[left - 1]) {
                        left++;
                    }
                    while (left < right && numbers[right] === numbers[right + 1]) {
                        right--;
                    }
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};