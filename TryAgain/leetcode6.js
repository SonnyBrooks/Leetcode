/**
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// RESULT: Had to look up answer...
var convert = function (s, numRows) {
    var result = '';
    if (numRows === 1) return s;

    var cycleLength = 2 * numRows - 2;

    for(var i = 0; i < numRows; i++) {
        for(var k = 0; k + i < s.length; k += cycleLength) {
            result += s[k+i];
            if(i != 0 && i != numRows - 1 && k + cycleLength - i < s.length) {
                result += s[k + cycleLength - i]
            }
        }
    }

    return result;
};