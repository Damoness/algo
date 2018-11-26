

//顺序队列
class ArrayQueue{


    constructor(n){
        this.n = n; //队列容量

        this.items = new Array(n);

        this.count  = 0; //队列大小

        this.head = 0; //头
        this.tail = 0; //尾部
    }

    /**
     * 出队
     */
    dequeue(){

        if (this.count>0){

            var result = this.items[this.head++];

            this.count--;

            return result;

        } else {

            return null;

        }

    }

    /**
     * 是否为空
     */
    isEmpty() {
        this.count>0 ? true : false;
    }


    /**
     * 入队
     */
    enqueue(item){

        if (this.tail === this.n){

            if (this.head === 0) return false;

            //数据搬移
            for(let i = this.head;i<this.tail;i++){

                this.items[i-this.head] = this.items[i];
            }

            this.tail -=this.head;
            this.head = 0;

        }

        this.items[this.tail++] = item;
        this.count++;
        return true;
    }


    print(){

        let string = '';
        for(let i=this.head;i<this.tail;i++){
            string += this.items[i]+'<-';
        }
        console.log(string);
    }


}

let arrayQueue = new ArrayQueue(10);
arrayQueue.enqueue(1);
arrayQueue.enqueue(2);
arrayQueue.enqueue(3);
arrayQueue.enqueue(4);
arrayQueue.enqueue(2);
arrayQueue.enqueue(3);
arrayQueue.enqueue(4);




//链式队列

class LinkNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedListQueue{

    constructor(n){
        this.n = n;

        this.head = new LinkNode(0);
        this.tail = this.head;

        this.count = 0;
    }


    dequeue(){

        if (this.head!==this.tail && this.count>0){
            let  result = this.head.val;
            this.head = this.head.next;
            this.count--;

            return result;
        } else {
            return null
        }

    }

    enqueue(item){

        if (this.count === this.n) return false;

        this.tail.val = item;
        let newNode = new LinkNode(0);
        this.tail.next = newNode;
        this.tail = newNode;
        this.count++;
        return true;
    }

    print(){

        let string = '';
        let currentNode = this.head;

        while (currentNode!=this.tail){
            string += currentNode.val+'<-';
            currentNode = currentNode.next;
        }
        console.log(string);
    }

}


let linkedListQueue = new LinkedListQueue(5);
linkedListQueue.enqueue(1);
linkedListQueue.enqueue(2);
linkedListQueue.enqueue(3);
linkedListQueue.enqueue(4);
linkedListQueue.enqueue(2);
linkedListQueue.enqueue(3);
linkedListQueue.enqueue(4);

//循环队列
class CircularQueue {
    constructor(n){
        this.n = n
        this.items = new Array(n);

        this.head = 0;
        this.tail = 0;
    }


    /**
     * 入队
     * @param item
     */
    enqueue(item){

        if (((this.tail+1)%this.n)!==this.head){

            this.items[this.tail]=item;
            this.tail = (this.tail +1)%this.n;

            return true;
        } else {
            return false;
        }
    }


    /**
     * 出队
     */
    dequeue(){

        if (this.head!==this.tail){

            let result = this.items[this.head];

            this.head = (this.head+1)%this.n;

            return result;
        }else {
            return null;
        }

    }


}

let circularQueue = new CircularQueue(8);

circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.enqueue(8);

//实际应用
//阻塞队列和并发队列
