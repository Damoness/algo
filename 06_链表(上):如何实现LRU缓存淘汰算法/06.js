//反转一个单链表。

function ListNode(val) {
    this.val = val;
    this.next = null;
}


class LinkedList {

    constructor(){
        this.head = new ListNode('head');
    }

    /**
     * 根据值来查找链表
     * @param val :
        * @returns {*} 查找到获取链表,查找不到返回null
     */
    findByValue(val){

        let currentNode = this.head.next;

        while (currentNode!==null){

            if (currentNode.val===val){
                console.log(currentNode);
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        console.log('没找到');
        return null;
    }


    /**
     * 删除某个结点
     * @param val
     * @returns {*}
     */
    removeNodeByValue(val){

        let currentNode = this.head;

        while (currentNode.next !==null){

            if (currentNode.next.val  === val){
                const  res = currentNode.next;
                currentNode.next = currentNode.next.next;
                return res;
            }
            currentNode = currentNode.next;
        }
        return null;
    }


    /**
     * 根据index查找节点
     * @param index
     * @returns {null}
     */
    findByIndex(index){

        let currentNode = this.head;

        if (index<0) return null; //小于0返回null

        while (currentNode !==null && index>=0){

            currentNode = currentNode.next;
            index--;
        }

        return currentNode;
    }


    /**
     * 打印链表
     */
    print(){

        let currentNode = this.head;

        let str ='';

        while (currentNode !== null){
            str +=`${currentNode.val}-->`;
            currentNode = currentNode.next;
        }

        console.log(str+'null');

    }

    /**
     * 插入新增在index后面
     * @param newVal
     * @param index
     */
    insert(newVal,index){

        const currentNode = this.findByIndex(index);

        if (currentNode!==null){

            const  newNode = new ListNode(newVal);
            newNode.next = currentNode.next;
            currentNode.next = newNode;


        } else {

            console.log('未找到插入位置')
            return
        }

    }

    /**
     * 在链表尾部增加元素
     * @param val
     * @returns {LinkedList}
     */
    push(val){

<<<<<<< HEAD
        let currentNode = this.head;

        while (currentNode.next!==null){
            currentNode = currentNode.next;
        }
=======
 let list = new LinkedList();
>>>>>>> 21b4e2da1587b6eee7f4b6da2724f1e4ee48fd10

        const newNode = new ListNode(val);
        currentNode.next = newNode;

        return this;
    }

    /**
     * 移除尾部元素
     */
    pop(){

        let currentNode = this.head;
        if (currentNode.next) {
            while (currentNode.next.next !==null){
                currentNode = currentNode.next;
            }
            const res = currentNode.next;
            currentNode.next = null;
            return res;
        }
    }

    /**
     * 增加val到链表的头部
     * Add to the front of an LinkedList
     * @param val
     */
    unshift(val){
        const newNode = new ListNode(val);
        newNode.next=this.head.next;
        this.head.next = newNode;
    }


    /**
     * 增加结点到头部
     * @param node : ListNode
     */
    addNode(node){
        if (node!=null){
            node.next = this.head.next;
            this.head.next = node;
        }
    }


    /**
     * 移除链表第一个元素
     * Remove from the front of an LinkedList
     */
    shift(){
        let currentNode = this.head.next;
        if (currentNode !== null){
            this.head.next = currentNode.next;
        }
    }

}


var list = new LinkedList();

list.push(0).push(1).push(2).push(3).push(4)

list.print();

list.findByValue(2);

list.findByValue(5);

list.findByIndex(-1);

list.findByIndex(0);

list.findByIndex(8);

list.findByIndex(3);

list.insert(5,1);

list.print();

list.unshift(-1);

list.unshift(-2);list.print();

list.shift();list.print();

list.pop();list.print();


class LRUCache {

    constructor(capacity){
        this.capacity = capacity;
        this.num = 0;
        this.linkedList = new LinkedList();
    }

    get(key){

        let removedNode  = this.linkedList.removeNodeByValue(key);
        if(removedNode!==null){
            this.linkedList.unshift(removedNode.val);
            //return removedNode.val;
        }else { //没有找到

            if (this.num <this.capacity){
                this.linkedList.unshift(key);
                this.num++;
            }else {
                this.linkedList.pop();
                this.linkedList.unshift(key);
            }
        }
        this.linkedList.print();
    }
}


let cache1 = new LRUCache(3);

cache1.get(2);
cache1.get(1);
cache1.get(2);


//146. LRU缓存机制
//https://leetcode-cn.com/problems/lru-cache/
class LRUCache2 {

    /**
     * @param {number} capacity
     */
    constructor(capacity){
        this.capacity = capacity;
        this.num = 0;
        this.linkedList = new LinkedList();
        this.hash={};
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key){
        //console.log(JSON.stringify(this.hash))
        let {node,value}  = this.hash[key]||{};
        if (node!==undefined){
            this.linkedList.removeNodeByValue(key);
            this.linkedList.addNode(node);
            this.linkedList.print();
            return value;
        }else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key,value){

        let {node}  = this.hash[key]||{};
        if (node!==undefined){

            this.linkedList.removeNodeByValue(key);
            this.linkedList.addNode(node);
            this.linkedList.print();
            return value;
        } else {

            if (this.num < this.capacity){

                let newNode = new ListNode(key);
                this.linkedList.addNode(newNode);
                this.hash[key]={node:newNode,value:value};
                this.num++;

            } else {

                let result = this.linkedList.pop();
                delete this.hash[result.val];

                let newNode = new ListNode(key);
                this.linkedList.addNode(newNode);
                this.hash[key]={node:newNode,value:value};

            }

            this.linkedList.print();

        }

    }

}

let cache = new LRUCache2(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
