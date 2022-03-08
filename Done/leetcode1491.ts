function average(salary: number[]): number {
    return salary.sort((n1, n2) => n1 - n2).reduce((p, c, i) => {
        if(i === 0 || i === salary.length - 1) return p;
        return p + c;
    }, 0) / (salary.length - 2);
};

const salary: number[] = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000];
console.log(average(salary))
