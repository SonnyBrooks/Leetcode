function diagonalSum(mat: number[][]): number {
    let sum = 0;
    for(let i = 0; i < mat.length; i++) {
        if(mat.length % 2 === 0 || i !== Math.floor(mat[i].length / 2))
            sum += mat[i][i] + mat[i][mat[i].length - 1 - i];
        else
            sum += mat[i][i];
    }

    return sum;
};

let t1 = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
    ]

let t2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


console.log(diagonalSum(t1));
console.log(diagonalSum(t2));