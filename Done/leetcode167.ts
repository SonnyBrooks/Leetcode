/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
 */

function twoSum(numbers: number[], target: number): number[] | void {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] + numbers[numbers.length - 1] < target) continue; //Skip all numbers smaller than your target
        for(let k = i + 1; k < numbers.length; k++) {
            if(numbers[i] + numbers[k] === target) return [i + 1, k + 1];
            if(numbers[i] + numbers[k] > target) break;
        }
    }
};

var numbers = [2,7,11,15];
console.log(twoSum(numbers, 9))