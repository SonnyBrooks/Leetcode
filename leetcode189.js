/** 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// TODO: Solution is too slow.
var rotate = function (nums, k) {
    nums.unshift(nums.splice(nums.length - k%nums.length,nums.length))
};

let ex1 = [1, 2, 3, 4, 5, 6, 7];
rotate(ex1, 3)

console.log(ex1);