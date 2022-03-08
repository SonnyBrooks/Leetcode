class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    } 
}

function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    let slow = head;
    let fast = head.next;
    while(head.next) {
        if(fast === slow) return true;
        if(!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};