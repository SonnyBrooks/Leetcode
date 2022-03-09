function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        let nextGreatest = -1;
        for(let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                nextGreatest = nums2[j];
                break;
            }
        }
        result.push(nextGreatest);
    }

    return result;
};