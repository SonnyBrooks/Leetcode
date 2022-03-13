var findTheDifference = function(s:string, t:string) {
    let sDictionary = new Map();
    let tDictionary = new Map();

    s.split('').map(a => {
        let sCount = sDictionary.get(a);

        if(sCount) {
            sDictionary.set(a, sCount + 1);
        } else {
            sDictionary.set(a, 1)
        }
    });

    for(let i = 0; i < t.length; i++) {
        let sCount = sDictionary.get(t[i]);
        let tCount = tDictionary.get(t[i]);

        if(!sCount) return t[i];

        if(tCount) {
            if(tCount + 1 > sCount) return t[i];
            tDictionary.set(t[i], tCount + 1);
        } else {
            tDictionary.set(t[i], 1);
        }
    }

    return '';
};

let s = 'abcd';
let t = 'abcde';
console.log(findTheDifference(s, t))
