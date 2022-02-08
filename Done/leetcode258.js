/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * Runtime: 80 ms, faster than 92.67% of JavaScript online submissions for Add Digits.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num / 10 >= 1) {
        num = num.toString().split('').reduce((a, b) => Number(a) + Number(b))
    }

    return num;
};

console.log(addDigits(38))