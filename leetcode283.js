/** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. */

// Original 
// var moveZeroes = function (nums) {
//     var p1 = 0, p2 = 0

//     while(true) {
//         while (nums[p1] !== 0 && p1 < nums.length) p1++
//         p2 = p1 + 1
//         while (nums[p2] === 0 && p2 < nums.length) p2++
//         if (p2 === nums.length || p1 === nums.length) break;
//         nums[p1] = nums[p2];
//         nums[p2] = 0;
//     }
// };

// I thought that this one was more... clever(?)/cheating. 
// But it works and it's much quicker than my original solution and more intuitive to anyone reading it in my opinion.
var moveZeroes = function (nums) {
    var length = nums.length;
    for(var i = 0; i < nums.length;) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    while(nums.length < length) {
        nums.push(0);
    }
};

let ex1 = [0, 1, 0, 3, 12];
moveZeroes(ex1);

console.log('Ex 1', ex1);

let ex2 = [1, 0, 0, 3, 5, 12];
moveZeroes(ex2)
console.log('Ex 2', ex2)

let ex3 = [1];
moveZeroes(ex3)
console.log('Ex 3', ex3)

