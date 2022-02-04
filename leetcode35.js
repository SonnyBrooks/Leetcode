/** 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Result: Complete 2/1/2022. Same answer as 704 pretty much.
 var searchInsert = function(nums, target) {
    var startIndex = 0;
    var endIndex = nums.length - 1;

    while (true) {
        if (nums[startIndex] === target) return startIndex;
        if (nums[endIndex] === target) return endIndex;
        if (endIndex - startIndex === 1 || endIndex === startIndex) {
            if(nums[endIndex] < target) {
                return endIndex + 1
            } else if (nums[startIndex] > target) return 0;
            
            return startIndex + 1;
        }
        var nextIndex = Math.floor((endIndex + startIndex) / 2);
        if (nums[nextIndex] < target) {
            startIndex = nextIndex;
        } else { 
            endIndex = nextIndex;
        }
    }
};