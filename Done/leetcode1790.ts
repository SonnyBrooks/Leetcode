function areAlmostEqual(s1: string, s2: string): boolean {
    if(s1 === s2) return true;
    let s1LetterSet = new Set();
    let s2LetterSet = new Set();
    let nonEqPos = 0;

    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) nonEqPos++;
        s1LetterSet.add(s1[i]);
        s2LetterSet.add(s2[i]);
    }
    
    if(nonEqPos !== 2) return false
    
    s1LetterSet.forEach((letter) => {
        if(s2LetterSet.delete(letter) === false) return false;
    })
    
    if(s2LetterSet.size > 0) return false;

    return true;
};
console.log(areAlmostEqual('kelb', 'kelb'))