function hammingWeight(n: number): number {
    return n.toString(2).split('1').length - 1;
};

let n: number = 0o10000000
console.log(hammingWeight(n));