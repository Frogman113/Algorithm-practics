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
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next !== null && current.next.next !== null) {
        let firstNode = current.next;
        let secondNode = current.next.next;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;

        current = firstNode;
    }

    return dummy.next;
};