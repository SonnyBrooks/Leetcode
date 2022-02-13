/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

var removeNthFromEnd = function (head, n) {
    var dummyHead = new ListNode(-1);
    dummyHead.next = head;

    var trailNode = dummyHead;
    var currentNode = dummyHead;

    for(let i = 1; i <= n+1; i++) {
        currentNode = currentNode.next
    }

    while(currentNode != null) {
        currentNode = currentNode.next;
        trailNode = trailNode.next;
    }

    trailNode.next = trailNode.next.next;
    return dummyHead.next;
};

console.log(nodeToArray(removeNthFromEnd(l1, 2)))

var l2 = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(nodeToArray(removeNthFromEnd(l2, 3)))


function nodeToArray(n) {
    if (n === null) return []

    let valArr = [];
    while (n.next) {
        valArr.push(n.val);
        n = n.next;
    }
    valArr.push(n.val)

    return valArr;
}
