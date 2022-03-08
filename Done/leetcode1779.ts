function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let smallest = Infinity;
    let index = -1;
    
    for(let i = 0; i < points.length; i++) {
        if(x === points[i][0] || y === points[i][1]) {
            if(smallest > Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])) {
                smallest = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
                index = i;
            }
        }
    }
    
    return index;
};

const points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
console.log(nearestValidPoint(3, 4, points))