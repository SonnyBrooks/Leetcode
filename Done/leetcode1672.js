/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * 
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;

    for(let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((num, sum) => sum += num)
        max = sum > max ? sum : max;
    }

    return max;
};

var l1 = [[1,5],[7,3],[3,5]]
console.log(maximumWealth(l1));