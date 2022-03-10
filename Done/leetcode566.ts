function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let newArray:number[][] = [];
    let flattened:number[] = flattenArray(mat);
    let currentFlatIndex = 0;

    if(r*c !== flattened.length) return mat;

    for(let currRow = 0; currRow < r; currRow++) {
        newArray.push([]);
        for(let currCol = 0; currCol < c; currCol++) {
            newArray[currRow].push(flattened[currentFlatIndex]);
            currentFlatIndex++;
        }
    }
    
    return newArray;
};

function flattenArray(arr:number[][]): number[] {
    return arr.reduce((p, c) => {
        return p.concat(c);
    }, [])
}

console.log(matrixReshape([[1,2],[3,4]], 2, 4))
