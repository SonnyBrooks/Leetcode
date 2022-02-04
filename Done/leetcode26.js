var removeDuplicates = function (nums) {
    if(nums.length === 0) return [];

    let i = 0, j = 1;
    while(j<nums.length) {
        if(nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
            j++
        } else {
            j++
        }
    }
    return i + 1;
};

let ex1 = [1, 1, 2];

console.log(removeDuplicates(ex1));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));