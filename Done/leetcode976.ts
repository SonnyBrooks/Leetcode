/**
 * 
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 */

function largestPerimeter(nums: number[]): number {
    nums = nums.sort((a,b) => a - b);

    for (let i = nums.length - 1; i >= 0; i--) {
        const a = nums[i];
        const b = nums[i - 1];
        const  c = nums[i - 2];

        if(a + b > c && a + c > b && b + c > a) return a + b + c;
    }
    
    return 0;
};