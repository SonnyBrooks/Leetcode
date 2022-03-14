//Most used question in Facebook interviews in 2020 and 2021

function isAlienSorted(words: string[], order: string): boolean {
    let index = setIndex(order);

    for(let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        for(let k = 0; k < word1.length; k++) {
            if(k === word2.length) return false; // word 2 is shorter than word 1

            if(word1[k] != word2[k]) {
                if(index.get(word2[k]) < index.get(word1[k])) return false;
                break;
            }
        }
    }

    return true;
};

function setIndex(order:string) {
    let dict = new Map();

    for(let i = 0; i < order.length; i++) {
        dict.set(order[i], i);
    }

    return dict;
}


const words = ["apple","app"]
const order = "abcdefghijklmnopqrstuvwxyz"
console.log(isAlienSorted(words, order));