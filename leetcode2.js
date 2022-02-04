/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//RESULT: Solved
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var l3 = new ListNode(0);
var l4 = new ListNode(0);

var l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
var l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

var l7 = new ListNode(9, new ListNode(9, new ListNode(1)));
var l8 = new ListNode(1)

var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    if (l1) { sum += l1.val }
    if (l2) { sum += l2.val }
    if(sum >= 10) {
        if(l1 && l1.next) {
            l1.next.val += 1;
        } else if(l2 && l2.next) {
            l2.next.val += 1;
        } else {
            return new ListNode(sum % 10, new ListNode(1))
        }
    }
    sum %= 10;

    if(l1.next && (!l2 || !l2.next)) {
        return new ListNode(sum, addTwoNumbers(l1.next, null));
    } else if((!l1 || !l1.next) && (l2 && l2.next)) {
        return new ListNode(sum, addTwoNumbers(l2.next, null));
    } else if(l1.next && l2.next) {
        return new ListNode(sum, addTwoNumbers(l1.next, l2.next));
    }

    return new ListNode(sum);
}

function getNumber(node) {
    if (node.next) {
        return `${node.val},` + getNumber(node.next);
    }
    return node.val;
}

const ex1 = addTwoNumbers(l1, l2);
const ex2 = addTwoNumbers(l3, l4);
const ex3 = addTwoNumbers(l5, l6); //10,009,998
const ex4 = addTwoNumbers(l6, l5);
const ex5 = addTwoNumbers(l7, l8);

console.log(getNumber(ex1));
console.log(getNumber(ex2));
console.log(getNumber(ex3));
console.log(getNumber(ex4));
console.log(getNumber(ex5));