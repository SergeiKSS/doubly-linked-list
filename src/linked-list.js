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
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var curentNode = this._head,
            length = this.length,
            count = 0;
        while (count < index){
            curentNode = curentNode.next;
            count++;
        }
        curentNode.next.prev = curentNode.prev;
        curentNode.prev.next = curentNode.next;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
