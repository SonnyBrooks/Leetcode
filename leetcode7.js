/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var newNum = x < 0 ? -1 * parseInt(x.toString().split('').reduce((reversed, character) => character + reversed, '')) : parseInt(x.toString().split('').reduce((reversed, character) => character + reversed, ''));

    return (newNum > Math.pow(2, 31) - 1 || newNum < Math.pow(-2, 31)) ? 0 : newNum;
};