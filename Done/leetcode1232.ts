function checkStraightLine(coordinates: number[][]): boolean {
    let sortedCoords: number[][] = sortCoords(coordinates);
    let slopeBetweenPoints: number = calculateSlope(sortedCoords[0], sortedCoords[1]);
    for(let i = 1; i < sortedCoords.length - 1; i++) {
        if(calculateSlope(sortedCoords[i], sortedCoords[i + 1]) !== slopeBetweenPoints) return false;
    }
    return true;
};

function calculateSlope(p1: number[], p2: number[]): number {
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

function sortCoords(coordinates: number[][]): number[][] {
    return coordinates.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[1]-b[1];
    });
}