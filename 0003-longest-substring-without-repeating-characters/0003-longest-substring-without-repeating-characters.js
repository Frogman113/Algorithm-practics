/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0;

    for (let start = 0; start < s.length; start++) {
        let tempLength = new Set();

        for (let end = start; end < s.length; end++) {
            if (tempLength.has(s[end])) {
                break;
            }
            tempLength.add(s[end]);
            longestLength = Math.max(longestLength, end - start + 1);
        }
    }

    return longestLength;
};