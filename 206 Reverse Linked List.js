/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var curr = head;
    var prev = null;
    
    while(curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    
    return prev;
};

var reverseList = function(head) {
    if (head === null || head.next === null) {
      return head
    }
    let tmp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
};


let node1 = ListNode(1);
let node2 = ListNode(2);
let node3 = ListNode(3);
let node4 = ListNode(4);
let node5 = ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let x = reverseList(node1);

console.log(x.val);
