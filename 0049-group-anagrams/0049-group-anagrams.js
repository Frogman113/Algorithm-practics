/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = {};

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }
        anagramGroups[sortedWord].push(word);
    }

    return Object.values(anagramGroups);
};