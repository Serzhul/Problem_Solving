class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (data === this.data) return this;

        if (data < this.data && this.left) {
            this.left.contains(data);
        }

        if (data > this.data && this.right) {
            this.right.contains(data);
        }

        return null;
    }
}

export default Node;
