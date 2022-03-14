function isValid(s: string): boolean {
    let stack: string[] = [];
    const dict: { [key: string]: string } = { '(': ')', '{': '}', '[': ']', ')': '(', '}': '{', ']': '[' }
    const opening: string = '({[';

    for (let char of s.split('')) {
        let peek: string | undefined = stack[stack.length - 1];

        if (peek === undefined || opening.includes(char)) {
            stack.push(char);
        } else if (peek === dict[char]) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
};


let str = "[({()}[][])]";
console.log(isValid(str));