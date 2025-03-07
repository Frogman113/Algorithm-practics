/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];
        
        if (currentBracket === '(' || currentBracket === '{' || currentBracket === '[') {
            stack.push(currentBracket);
        } else {
            if (stack.length === 0 || stack.pop() !== bracketPairs[currentBracket]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};