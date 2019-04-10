//Trees
//Computer folders
//HTML DOM
//Artificial Intelligence
//Abstract syntax tree
//JSON

//Binary tree -> at most 2 children

//BST -> Word with data that are sortable
//Every node to the left of the parent is always less than the parent
//Every node to the right of the parent is always more than the parent


class BST {
    constructor() {
        this.root = null;

    }
    // Insertion - O(log n)
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }

    }
    // Searching - O(log n)
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }else if(value > current.value) {
                current = current.right;
            }else {
                found = true;
            }
        }
        if(!found) return undefined; 
        return current;
    }


}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



var tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(10);
