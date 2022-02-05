/** 
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
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
 * @return {ListNode}
 */
var middleNode = function (head) {
    var numberNodes = 0;
    var nodes = [head];

    while (head.next) {
        numberNodes++;
        head = head.next;
        nodes.push(head);
    }

    return nodes[Math.ceil(numberNodes/2)];
};