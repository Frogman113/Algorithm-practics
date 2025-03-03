/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longestSubstring = "";

    for (let center = 0; center < s.length; center++) {
        let palindromeO = expandFromCenter(center, center);
        let palindromeE = expandFromCenter(center, center + 1);

        if (palindromeO.length > longestSubstring.length) {
            longestSubstring = palindromeO;
        }

        if (palindromeE.length > longestSubstring.length) {
            longestSubstring = palindromeE;
        }
    }

    return longestSubstring;
};