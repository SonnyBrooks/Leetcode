/**
 * Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */

// RESULT: Came up with an answer but it wasn't fast enough. The expand around center concept was looked up.
// var longestPalindrome = function (s) {
//     let longestPal = '';
//     if (s === s.split("").reverse().join("")) return s;

//     for(var beginning = 0; beginning < s.length && longestPal.length < s.length - beginning; beginning++) {
//         for(var end = beginning + longestPal.length; end <= s.length; end++) {
//             let substring = s.substring(beginning, end);
//             if(substring === substring.split("").reverse().join("") && substring.length > longestPal.length) longestPal = substring;
//         }
//     }

//     return longestPal;
// };

// var longestPalindrome = function (s) {
//     let length = s.length;

//     while(length >= 1) {
//         for(var i = 0; i <= s.length - length; i++) {
//             let sub = s.substring(i, i + length);
//             if(sub === sub.split("").reverse().join("")) return sub;
//         }
//         length--;
//     }
// };

var longestPalindrome = function (s) {
    if (!s) return '';
    if(s === s.split("").reverse().join("") || s.length < 2) return s;

    var res = '';
    for (var i = 0; i < s.length; i++) {
        var sub1 = expandAroundCenter(s, i, i);
        var sub2 = expandAroundCenter(s, i, i+1);
        res = sub1.length > res.length ? sub1 : res;
        res = sub2.length > res.length ? sub2 : res;
    }
    return res;
}

function expandAroundCenter(s, start, end) {
    var res = '';
    while((start >= 0 && end <= s.length - 1) && s[start] === s[end]) {
        res = s.substring(start, end + 1);
        start -= 1;
        end += 1;
    }
    return res;
}

test('ex1', () => {
    expect(longestPalindrome('babad')).toBe('bab')
})
test('ex2', () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
})
test('ex3', () => {
    expect(longestPalindrome('a')).toBe('a')
})
test('ex4', () => {
    expect(longestPalindrome('ac')).toBe('a')
})
test('ex5', () => { expect(longestPalindrome("aacabdkacaa")).toBe('aca') });
test('ex6', () => {
    expect(longestPalindrome(
        "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"))
    .toBe('qahaq')
})
test('ex7', () => {expect(longestPalindrome("abacab")).toBe('bacab')})