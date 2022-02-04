/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */

//RESULT: Solved
 var lengthOfLongestSubstring = function(s) {
    var i = 0, j = 0;
    var longest = 0;
    var set = new Set();

    while(i < s.length) {
        while(set.has(s[i])) {
            set.delete(s[j]);
            j++;
        }
        
        set.add(s[i]);
        longest = Math.max(longest, set.size);
        i++;
    }

    return longest;
};

let ex1 = "abcabcbb"// output 3
let ex2 = "bbbbbbbb"// output 1
let ex3 = "pwwkew"  // output 3
let ex4 = ''        // output 0
let ex5 = ' '       // output 1
let ex6 = 'au';     // output 2
let ex7 = 'aug';    // output 3
let ex8 = 'aab';    // output 2

console.log("ex1", lengthOfLongestSubstring(ex1))
console.log("ex2", lengthOfLongestSubstring(ex2))
console.log("ex3", lengthOfLongestSubstring(ex3))
console.log("ex4", lengthOfLongestSubstring(ex4))
console.log("ex5", lengthOfLongestSubstring(ex5))
console.log("ex6", lengthOfLongestSubstring(ex6))
console.log("ex7", lengthOfLongestSubstring(ex7))
console.log("ex8", lengthOfLongestSubstring(ex8))