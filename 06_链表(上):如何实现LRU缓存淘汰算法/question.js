

//234. 回文链表

/**
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
var isPalindrome = function(head) {

    //null 或 一个节点的情况
    if (head == null || head.next == null) return true;

    //使用快慢指针,fast一次移动2步,slow一次移动一步
    let fast = head;
    let slow = head;

    //print(head);

    let pre = null; //用于帮助翻转链表,指向前一个节点

    while (fast !=null && fast.next!=null){

        fast = fast.next.next;
        //慢指针一边移动一边翻转
        const next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;

    }

    let  flag = true;  //结果

    var  left;  //左节点
    var  right; //右节点 用于 接下来的遍历

    if (fast ==null){//元素为偶数的情况

        left = pre;
        right = slow
        pre =right;

        // print(slow);
        // print(right);

    } else if(fast.next==null){//元素为基数的情况

        //var middle = slow;

        left = pre;
        right = slow.next;
        pre = slow;

        // print(left);
        // print(right);
    }

    while (left != null && right !=null){

        if (left.val !== right.val) {
            flag = false;
        }
        const next = left.next;
        left.next = pre;
        pre = left;
        left = next;
        right = right.next;
    }


    //print(head); //
    return flag;


};


var reverseList = function(head,newHeadNode) {

    var root = newHeadNode;
    var currentNode =head;

    while(currentNode!==null){
        const next = currentNode.next;
        currentNode.next = root;
        root = currentNode;
        currentNode = next;
    }

    return root;

};





var  print = function(head){

    let currentNode = head;

    let str ='';

    while (currentNode !== null){
        str +=`${currentNode.val}-->`;
        currentNode = currentNode.next;
    }

    console.log(str+'null');

}
