/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hayLen = haystack.length;
    let needleLen = needle.length;

    for (let i = 0; i <= hayLen - needleLen; i++) {
        let match = true;
        for (let j = 0; j < needleLen; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    
    return -1;
};