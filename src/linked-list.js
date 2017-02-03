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

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
