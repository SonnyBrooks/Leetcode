var mergeTwoLists = function(list1, list2) {
    var nextNode;
    if(list1.next && list2.next) {
        nextNode = mergeTwoLists(list1.next, list2.next)
    } else if(list1.next && !list2.next) {
        nextNode = mergeTwoLists(list1.next, list2)
    }
    if(nextNode) {
        if(list1.val > nextNode.val) {
            list1.next = nextNode.next
            nextNode.next = list1;
            return nextNode;
        } else {
            list1.next = new ListNode(nextNode.val, nextNode.next)
            return list1;
        }
    }
    if(list2.val > list1.val) {
        list1.next = list2;
        list2.next = nextNode;
        return list1
    } else {
        list2.next = list1;
        list1.next = nextNode;
        return list2
    }
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var l3 = new ListNode(1, new ListNode(2, new ListNode(4)));
var l4 = new ListNode(1, new ListNode(3, new ListNode(4)));

var l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
var l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

var l7 = new ListNode(9, new ListNode(9, new ListNode(1)));
var l8 = new ListNode(1)

printLL(mergeTwoLists(l2,l7))

function printLL(start) {
    if(start.next) {
        printLL(start.next)
    }
    console.log(start.val)
}