// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let count = new Map();

    for(var i = 0; i < nums.length; i++) {
        let currentCount = count.get(nums[i]);
        if(currentCount) {
            count.delete(nums[i])
        } else {
            count.set(nums[i], 1)
        }
    }

    return count.keys().next().value
};

var nums = [4,1,2,1,2];
console.log(singleNumber(nums))