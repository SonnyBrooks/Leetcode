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