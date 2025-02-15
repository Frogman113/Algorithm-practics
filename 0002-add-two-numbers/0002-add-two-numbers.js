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
var addTwoNumbers = function(l1, l2) {
    let temp = new ListNode(0);
    let currentNode = temp;
    let upNum = 0;
    
    while (l1 !== null || l2 !== null || upNum > 0) {
        let sum = upNum;
        
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        upNum = Math.floor(sum / 10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;
    }
    
    return temp.next;
};