function mergeAlternately(word1: string, word2: string): string {
    let newWord = '';
    let word1Arr = word1.split('');
    let word2Arr = word2.split('');
    
    while(word1Arr.length > 0 && word2Arr.length > 0) {
        newWord += word1Arr.shift() + word2Arr.shift();
    }
    while(word1Arr.length > 0) newWord += word1Arr.shift();
    while(word2Arr.length > 0) newWord += word2Arr.shift();
    
    return newWord;
};