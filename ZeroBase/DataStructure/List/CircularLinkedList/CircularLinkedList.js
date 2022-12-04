import Node from "../LinkedList/Node.js";

class CircularLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = null;
    this.size = 0;
  }

  insert(idx, data) {
    const newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.head.next = newNode;
      this.head.prev = newNode;

      newNode.next = this.head;
      newNode.prev = this.head;

      this.size += 1;
      return;
    }

    let cur = this.head;
    let count = 0;

    let isStart = false;

    while (!isStart || cur !== this.head) {
      isStart = true;

      if (count === idx) {
        break;
      }

      cur = cur.next;
      count += 1;
    }

    newNode.next = cur;
    newNode.prev = cur.prev;

    cur.prev.next = newNode;
    cur.prev = newNode;

    this.size += 1;
  }

  remove(data) {
    if (this.isEmpty()) return;

    if (this.getSize() === 1) {
      this.head.next = this.head;
      this.head.prev = this.head;
      this.size -= 1;
      return;
    }

    let cur = this.head;
    let isStart = false;

    while (!isStart || cur !== this.head) {
      isStart = true;

      if (cur.data === data) {
        break;
      }

      cur = cur.next;
    }

    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
    this.size -= 1;
  }

  search(data) {
    let cur = this.head;
    let isStart = false;
    let count = 0;

    while (!isStart || cur !== this.head) {
      isStart = true;

      if (cur.data === data) {
        console.log(`${count} 번째에 ${cur.data}가 있습니다.`);
        return;
      }

      cur = cur.next;
      count += 1;
    }

    console.log("데이터가 존재하지 않습니다.");
  }

  print() {
    let cur = this.head;
    let isStart = false;

    while (!isStart || cur !== this.head) {
      isStart = true;
      console.log(`${cur.data}`);
      cur = cur.next;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const newLinkedList = new CircularLinkedList();

newLinkedList.insert(1, "화");
newLinkedList.insert(2, "월");
newLinkedList.insert(3, "목");
newLinkedList.print();
newLinkedList.search("월");
newLinkedList.search("화");
newLinkedList.search("수");
newLinkedList.search("목");
newLinkedList.search("금");

newLinkedList.remove("월");
newLinkedList.remove("화");
newLinkedList.remove("목");
newLinkedList.print();
