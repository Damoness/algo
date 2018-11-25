


//顺序栈
class ArrayStack {

    constructor(n){

        this.items = new Array(n);
        this.n = n;
        this.count = 0;
    }


    pop(){

        if (this.count>0){
            this.count--;
            return  this.items[this.count];
        } else {
            return null;
        }


    }


    peek(){

        if (this.count>0){
            return  this.items[this.count-1];
        } else {
            return null;
        }
    }

    push(item){

        if (this.count < this.n){
            this.items[this.count] = item;
            this.count ++;
            this.print();
            return true;
        } else {
            console.log('栈满');
            return false;
        }

    }


    isEmpty(){
        return this.count == 0 ?true:false;
    }

    print(){
        let string='';
        for(let i=this.count-1;i>=0;i--){
            string+=this.items[i]+'--';
        }
        console.log(string);
    }


}

let arrayStack =  new ArrayStack(3);

arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);

arrayStack.push(4);
arrayStack.print();

arrayStack.pop();



//链式栈
class LinkedListStack{


    constructor(n){

        this.n = n;
        this.head=new ListNode('head');
        this.count = 0;

    }

    // /**
    //  * 入栈 (不能扩容)
    //  * @param item
    //  * @returns {boolean} 成功 ,失败
    //  */
    // push(item){
    //
    //     if (this.count < this.n){
    //
    //         const node = new ListNode(item);
    //         node.next = this.head.next;
    //         this.head.next = node;
    //
    //         this.count++;
    //         //this.print();
    //         return true;
    //     } else {
    //         //console.log('栈满');
    //         return false;
    //     }
    //
    // }

    /**
     * 入栈 (可以能扩容, *2)
     * @param item
     * @returns {boolean} 成功 ,失败
     */
    push(item){

        if (this.count === this.n){
            this.n = 2 * this.n;
        }

        const node = new ListNode(item);
        node.next = this.head.next;
        this.head.next = node;

        this.count++;
        this.print();
        return true;
    }


    pop(){
        if (this.count > 0){

            this.count--;
            var temp = this.head.next.val;
            this.head.next = this.head.next.next;

            return temp;
        } else {
            return null;
        }

    }

    isEmpty(){
        return this.count == 0 ?true:false;
    }


    /**
     * 栈顶元素
     * @returns {*}
     */
    peek(){

        if (this.count > 0){
            var temp = this.head.next.val;
            return temp;
        } else {
            return null;
        }

    }

    print(){
        let string = '';
        let currentNode = this.head.next;
        while (currentNode!=null){
            string +=currentNode.val + '--';
            currentNode = currentNode.next;
        }
        console.log(string);
    }

}

//节点
class ListNode {

    constructor(val){
        this.val = val;
        this.next = null;
    }
}


let linkedListStack = new LinkedListStack(3);
linkedListStack.push(1);
linkedListStack.push(2);
linkedListStack.push(3);

linkedListStack.push(4);
linkedListStack.print();

linkedListStack.pop();



//20. 有效的括号
/**
 *
 *
 *
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。
 https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let match = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    let stack = new ArrayStack(s.length);

    for(let i=0;i<s.length;i++){

        let c =  s.charAt(i);

        if( match[c] ==undefined){

            stack.push(c);
        }else {
            if (stack.pop()!=match[c]) {
                return false;
            }
        }

    }

    return stack.isEmpty();

};


//224. 基本计算器
/**
 *
 * https://leetcode-cn.com/problems/basic-calculator/
 *
 实现一个基本的计算器来计算一个简单的字符串表达式的值。

 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 示例 1:

 输入: "1 + 1"
 输出: 2
 示例 2:

 输入: " 2-1 + 2 "
 输出: 3

 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    var operators = { //操作符优先级
        '*':2,
        '/':2,
        '+':1,
        '-':1,
    }

    var operatorsStack =  new LinkedListStack(10); //操作符栈
    var operandStack =  new LinkedListStack(10); //操作数栈

    var operand=undefined;  //操作数

    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);

        if (operators[c] !== undefined){//判断是否为操作符

            if (operatorsStack.isEmpty()) {//操作符栈为空

                operatorsStack.push(c);

            }else {//操作符栈不为空,

                var priority = operators[operatorsStack.peek()]; //操作符栈栈顶元素优先级

                while(priority>=operators[c]){ //栈顶操作符的优先级大于当前操作符的优先级

                    var operator =  operatorsStack.pop();//取出栈顶操作符

                    var num1 = operandStack.pop(); //操作数的2个元素
                    var num2 = operandStack.pop();
                    var result = operation(num2,operator,num1);//计算出值

                    operandStack.push(result); //入栈

                    priority = operators[operatorsStack.peek()]; //继续取出 操作符栈栈顶元素 获取优先级

                }

                //直到当前c优先级大于栈顶元素优先级

                operatorsStack.push(c); //入栈
            }


        } else if (c!==' ') {

            var operand=0;  //操作数

            do {  //获取操作数,可能有多位

                operand = operand*10+parseInt(c);
                i++;
                c=s.charAt(i);

            }while (c!==' ' &&!isNaN(c) && i<s.length) //循环取出多位操作数,直到不是操作符,或者越界

            i--;

            //console.log('operand:'+operand);
            operandStack.push(operand); //入栈操作数
        }

    }




    while (!operatorsStack.isEmpty()) { //操作符栈不为空, 遍历取操作符,操作数计算,直到操作符栈为空

        var operator =  operatorsStack.pop();

        var num1 = operandStack.pop();
        var num2 = operandStack.pop();
        var result = operation(num2,operator,num1);
        operandStack.push(result);
    }

    if(!operandStack.isEmpty()){
        return operandStack.pop();
    }

};


var operation = function(num2,operator,num1){

    var result;

    switch (operator){
        case '*':{
            result = num2 * num1;
            break;
        }
        case '/':
        {
            result = parseInt((num2*1.0/num1));
            break;
        }
        case '+':{
            result = (num2) + (num1);
            break;
        }
        case '-':{
            result = (num2) - (num1);
            break;
        }

    }

    return result;

}



