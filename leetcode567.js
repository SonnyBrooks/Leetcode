/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function (s1, s2) {
//     var sortedS1 = s1.split('').sort().join('')
//     for (var i = 0; i <= s2.length - s1.length; i++) {
//         var currentSubstring = s2.substring(i, i + s1.length).split('').sort().join('');
//         if (currentSubstring === sortedS1) return true;

//     }
//     return false
// };

var checkInclusion = function (s1, s2) {
    var s1Map = new Array(26).fill(0);

    for(var i = 0; i < s1.length; i++) {
        s1Map[s1.charAt(i) - 'a'] += 1;
    }

    for(var i = 0; i < s2.length; i++) {
        var s2map = new Array(26).fill(0);

        for(var j = 0; j < s1.length; j++) {
            s2map[s2.charAt(i + j) - 'a'] += 1
        }

        for(var i = 0; i < 26; i++) {
            if(s1Map[i] != s2map[i])
                
        }
    }

    return true
};

let s1 = 'ab';
let s2 = 'eidbeaooo';

console.log(checkInclusion(s1, s2));
