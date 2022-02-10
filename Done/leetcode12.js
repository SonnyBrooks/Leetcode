/**
 * Given an integer, convert it to a roman numeral.
 */

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let romanNum = '';

    while(num >= 1000) {
        romanNum += 'M';
        num -= 1000;
    }
    while(num >= 900) {
        romanNum += 'CM';
        num -= 900;
    }
    while(num >= 500) {
        romanNum += 'D';
        num -= 500;
    }
    while(num >= 400) {
        romanNum += 'CD';
        num -= 400;
    }
    while(num >= 100) {
        romanNum += 'C';
        num -= 100;
    }
    while(num >= 90) {
        romanNum += 'XC';
        num -= 90;
    }
    while(num >= 50) {
        romanNum += 'L';
        num -= 50;
    }
    while(num >= 40) {
        romanNum += 'XL';
        num -= 40;
    }
    while(num >= 10) {
        romanNum += 'X';
        num -= 10;
    }
    while(num >= 9) {
        romanNum += 'IX';
        num -= 9;
    }
    while(num >= 5) {
        romanNum += 'V';
        num -= 5;
    }
    while(num >= 4) {
        romanNum += 'IV';
        num -= 4;
    }
    while(num > 0) {
        romanNum += 'I';
        num -= 1;
    }
    return romanNum;
};

console.log(intToRoman(1994));