/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var convertToArray = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

var convertToLinkedList = function (array) {
    let dummy = new ListNode(-1)
    let pre = dummy;
    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        let node = new ListNode(val)
        pre.next = node;
        pre = pre.next;
    }
    return dummy.next;
}

var removeZeroSumSublists = function (head) {
    let sum = 0, dummy = { val: 0, next: head }, map = { 0: [dummy] };
    while (head) {
        sum += head.val;
        if (sum in map) map[sum].forEach(node => node.next = head.next);
        map[sum] ? map[sum].push(head) : map[sum] = [head];
        head = head.next;
    }
    return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let map = { 0: [dummy] };
    let sum = 0;
    while (head) {
        sum += head.val;
        if (sum in map) {
            map[sum].forEach(node => node.next = head.next);
            map[sum].push(head)
        } else {
            map[sum] = [head];
        }
        head = head.next;
    }
    return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    let hash = new Map();
    let dummy = new ListNode(0);
    dummy.next = head;

    let sum = 0;
    let p = dummy
    while (p) {
        sum += p.val;
        hash.set(sum, p);
        p = p.next
    }

    sum = 0;
    p = dummy;
    while (p) {
        sum += p.val;
        p.next = hash.get(sum).next;
        p = p.next
    }
    return dummy.next;
};

let arr = [2, 2, -2, 1, -1, -1];
let head = convertToLinkedList(arr);
let x = removeZeroSumSublists(head);
let y = convertToArray(x);
console.log(y);