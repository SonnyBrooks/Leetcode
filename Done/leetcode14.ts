function longestCommonPrefix(strs: string[]): string {
    let longestPrefixLength = 0;
    if(strs.length === 1) {return strs[0]}
    
    while(true) {
        let prefix: string;
        let prefixValid:boolean = true;
        if(longestPrefixLength === 0) {
            prefix = strs[0][0];
        } else {
            prefix = strs[0].slice(0, longestPrefixLength + 1);
        }

        strs.forEach(word => {
            if(!word.startsWith(prefix)) {
                prefixValid = false;
            }
        })

        if(prefixValid) {
            longestPrefixLength++;
        } else {
            return strs[0].slice(0, longestPrefixLength);
        }
    }
};

let strs = ["dog","racecar","car"];

console.log(longestCommonPrefix(strs));