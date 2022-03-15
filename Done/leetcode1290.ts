/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getDecimalValue(head: ListNode | null): number {
    let result = '';
    let dummy = head;

    while(dummy) {
        result += dummy.val;
        dummy = dummy.next;
    }

    return parseInt(result, 2);
};

let list = new ListNode(1, new ListNode(0, new ListNode(1)))
console.log(getDecimalValue(list));