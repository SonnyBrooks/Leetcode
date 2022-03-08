/**
 * Given two non-negative integers low and high. 
 * Return the count of odd numbers between low and high (inclusive).
 */

 function countOdds(low: number, high: number): number {
    if(high - low === 1) return 1;
    let oddCount = 0;
    if(low % 2 !== 0 || high % 2 !== 0) oddCount++;
    if(low % 2 !== 0 && high % 2 === 0 || low % 2 === 0 && high % 2 !== 0) oddCount--;
    oddCount += ((high-low) / 2);
    return oddCount;
};


console.log(countOdds(3,7))
console.log(countOdds(8,10));