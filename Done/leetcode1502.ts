function canMakeArithmeticProgression(arr: number[]): boolean {
    let sortedAsc = arr.sort((a, b) => a - b);
    let step = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (step === -1) {
            step = sortedAsc[i + 1] - sortedAsc[i];
            continue;
        }
        if (sortedAsc[i + 1] - sortedAsc[i] != step) return false;
    }

    return true;
};