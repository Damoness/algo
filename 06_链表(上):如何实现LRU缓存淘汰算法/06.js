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

         let currentNode = this.head;

         while (currentNode.next!==null){
             currentNode = currentNode.next;
         }

         const newNode = new ListNode(val);
         currentNode.next = newNode;

         return this;
     }

 }


 let list = new LinkedList();

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

