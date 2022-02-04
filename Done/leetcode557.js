/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let sArr = s.split(' ');
    for(var i = 0; i < sArr.length; i++) {
        sArr[i] = sArr[i].split('').reverse().join('');
    }

    return sArr.join(' ');
};

var s = "Let's take LeetCode contest"
console.log(reverseWords(s))