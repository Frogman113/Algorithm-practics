/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let zigzagRows = Array.from({ length: numRows }, () => "");
    let rowIndex = 0;
    let directionDown = true;

    for (let char of s) {
        zigzagRows[rowIndex] += char;

        if (rowIndex === 0) {
            directionDown = true;
        } else if (rowIndex === numRows - 1) {
            directionDown = false;
        }

        rowIndex += directionDown ? 1 : -1;
    }

    return zigzagRows.join("");
};