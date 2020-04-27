/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
    var p = new ListNode(x - 1);
    p.next = head;
    head = p;
    var pre;

    while (p !== null && p.val < x) { // since we initialize it with x - 1
        pre = p;
        p = p.next;
    }

    if (p !== null) {
        var cur = pre;
        while (p !== null) {
            if (p.val < x) {
                var temp = cur.next;
                pre.next = p.next;
                cur.next = p;
                cur = p;
                p.next = temp;
                p = pre;
            }
            pre = p;
            p = p.next;
        }
    }

    temp = head;
    head = head.next;

    return head;
};

var partition = function (head, x) {
    if (!head) return head;
    let dumb = low = new ListNode(null);
    let dumbHigh = high = new ListNode(null);

    while (head) {
        if (head.val < x) {
            low.next = head;
            low = low.next;
        } else {
            high.next = head;
            high = high.next;
        }
        head = head.next;
    }
    high.next = null;
    low.next = dumbHigh.next;

    return dumb.next;
};