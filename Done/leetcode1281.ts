/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 */

 function subtractProductAndSum(n: number): number {
    const nArr = Array.from(n.toString()).map(Number);

    const product = nArr.reduce((p, c) => {
        return p * c;
    }, 1)

    const sum = nArr.reduce((p, c) => {
        return p + c;
    }, 0)

    return product - sum;
};

console.log(subtractProductAndSum(234));