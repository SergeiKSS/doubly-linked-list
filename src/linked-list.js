const Node = require('./node');

class LinkedList {
    constructor(length=0, _head=null, _tail=null) {
        this.length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else{
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {return this._head.data;}

    tail() {return this._tail.data;}

    at(index) {
        var curentNode = this._head,
            length = this.length,
            count = 0;
        while (count < index){
            curentNode = curentNode.next;
            count++;
        }
        return curentNode.data;
    }

    insertAt(index, data) {
        var curentNode = this._head,
            length = this.length,
            count = 0;
        if (curentNode==null){
            this.append(data);
            return this;
        }
        while (count < index){
            curentNode = curentNode.next;
            count++;
        }
        return curentNode.data = data;
    }

    isEmpty() {
        if (this.length==0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        if (this.isEmpty()){
            return this;} else {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;}
    }

    deleteAt(index) {
        var curentNode = this._head,
            length = this.length,
            count = 0;
        if (index==0 || length==1){
        this._head = null;
        this._head = null;
        this._tail = null;
        this.length = length -1;
        return this;
         }    
        while (count < index){
            curentNode = curentNode.next;
            count++;
        }
        curentNode.data = null;
        curentNode.next.prev = curentNode.prev;
        curentNode.prev.next = curentNode.next;
        this.length = length -1;
        return this;
    }

    reverse() {
        var node = new Node(this._tail.data),
            length = this.length,
            count = 1;
            node.next = this._tail.prev;
            node.prev = this._tail.next;
            this._tail.data = this._head.data;
            this._head = node;
        if (length==1){
                return this;
            }       
        while (count < length){
            var temp = node.next;
            temp.next = temp.prev;
            temp.prev = node;
            node = temp;
            count++;
        }
        return this;
    }

    indexOf(data) {
        var curentNode = this._head,
            length = this.length,
            count = 0,
            search = false;
        while (count < length){
            if (curentNode.data===data)
                {
                    search=true;
                    break;
                }
            curentNode = curentNode.next;
            count++;
        }
        if (search)
            {return count;}
        else{return -1;}
    }
}

module.exports = LinkedList;
