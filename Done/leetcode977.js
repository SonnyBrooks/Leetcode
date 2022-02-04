/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *  Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    return nums.map(num => num ** 2).sort((a,b) => a-b);
};

let ex1 = [-4,-1,0,3,10]

console.log(sortedSquares(ex1))