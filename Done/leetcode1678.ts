function interpret(command: string): string {
    while(command.includes('()')) {
        command = command.replace('()', 'o');
    }
    while(command.includes('(al)')){ 
        command = command.replace('(al)', 'al');
    }
    return command;
};

let command = '(al)G(al)()()G';

console.log(interpret(command));