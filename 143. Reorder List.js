/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return;
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let tail = reverse(slow.next);
    slow.next = null;
    merge(head, tail);
};

var reverse = function (head) {
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

var merge = function (head, p2) {
    let p1 = head;
    while (p1 && p2) {
        let tmp = p1.next;
        p1.next = p2;
        p2 = p2.next;
        p1.next.next = tmp;
        p1 = tmp;
    }
    return head;
}