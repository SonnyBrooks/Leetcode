function isHappy(n: number): boolean {
    let visited = new Set();
    let currentNum = n;
    visited.add(currentNum)

    while (true) {
        const nArray = Array.from(currentNum.toString()).map(Number);
        const sum = nArray.reduce((p, c) => {
            return p + c ** 2;
        }, 0)
        if (sum === 1) return true;
        if (visited.has(sum)) return false;
        visited.add(sum);
        currentNum = sum;
    }
};