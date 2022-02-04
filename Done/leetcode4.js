/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//RESULT: Solved
var findMedianSortedArrays = function (nums1, nums2) {
    let sa = [];

    while (nums1.length > 0 && nums2.length > 0) {
        if ((nums1[0] && nums2[0]) || (nums1[0] === 0 || nums2[0] === 0)) {
            if (nums1[0] <= nums2[0]) {
                sa.push(nums1.shift());
            } else {
                sa.push(nums2.shift());
            }
        }
    }

    if (nums1.length > 0) {
        sa = sa.concat(nums1);
    } else if (nums2.length > 0) {
        sa = sa.concat(nums2);
    }

    if (sa.length % 2 !== 0) {
        return sa[Math.floor(sa.length / 2)];
    } else {
        if (sa.length === 2) return (sa[0] + sa[1]) / 2;
        return (sa[Math.floor(sa.length / 2)] + sa[Math.floor(sa.length / 2) - 1]) / 2;
    }
};

let nums1 = [0, 0], nums2 = [0, 0]
console.log(findMedianSortedArrays(nums1, nums2));
