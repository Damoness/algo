

//1.单链表反正
/**
 * 206. Reverse Linked List
 * https://leetcode-cn.com/problems/reverse-linked-list
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

var reverseList = function(head) {

    var root = null;
    var currentNode =head;

    while(currentNode!==null){
        const next = currentNode.next;
        currentNode.next = root;
        root = currentNode;
        currentNode = next;
    }

    return root;

};


//2. 链表中环的检测
/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if(head == null || head.next ==null) return false

    var slow = head;
    var fast = head.next;

    while(fast!=slow){
        if(fast.next==null || fast.next.next==null){
            return false;
        }

        slow=slow.next;
        fast=fast.next.next;
    }

};

//3.两个有序的链表合并
/**
 * 21. 合并两个有序链表 Merge Two Sorted Lists
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    if(l1 == null) return l2;
    if(l2 == null) return l1;

    var dummyHead = new ListNode(0);
    var cur = dummyHead;

    while (l1 != null && l2 !=null){

        if (l1.val < l2.val){

            cur.next = l1;
            cur = cur.next;
            l1 = l1.next;

        }else {
            cur.next = l2;
            cur = cur.next;
            l2 = l2.next;
        }

    }

    if(l1 == null){
        cur.next=l2;
    }else{
        cur.next=l1;
    }

    return dummyHead.next;

};


//4.删除链表倒数第n个结点
/**
 * 19. 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    var dummyHead = new ListNode(0);
    dummyHead.next = head;

    var first = dummyHead;
    var second = dummyHead;

    for(var i = 1; i <= n+1; i++) {
        first = first.next;
    }
    while(first !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;

    return  dummyHead.next;

};

//5.求链表的中间结点
/**
 * 876. Middle of the Linked List
 * https://leetcode-cn.com/problems/linked-list-cycle/solution/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var middleNode = function(head) {

    if (head == null || head.next === null) return head; //这一行可以去掉

    var fast = head;
    var slow = head;

    while (fast!==null && fast.next!=null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;

};
