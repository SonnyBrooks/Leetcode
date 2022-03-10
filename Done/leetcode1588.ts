function sumOddLengthSubarrays(arr: number[]): number {
    let sum: number = 0;

    for(let i = 1; i <= arr.length; i += 2) {
        for(let k = 0; k <= arr.length - i; k++) {
            let subSet = arr.slice(k, k + i);
            sum += subSet.reduce((a, b) => {
                return a + b;
            }, 0)
        }
    }

    return sum;
};

const arr = [10,11,12];
console.log(sumOddLengthSubarrays(arr));