import Node from "./Node.js";

class DummyDoubleLinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  insert(idx, data) {
    const newNode = new Node(data, null, null);

    let count = 0;
    let cur = this.head;

    while (cur !== null) {
      if (count === idx) {
        break;
      }

      cur = cur.next;
      count += 1;
    }

    newNode.prev = cur.prev;
    newNode.next = cur;

    cur.prev.next = newNode;
    cur.prev = newNode;

    this.size += 1;
  }

  remove(data) {
    if (this.isEmpty()) return;

    let cur = this.head;

    while (cur !== null) {
      if (cur.data === data) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;

        cur.next = null;
        cur.prev = null;
      }

      cur = cur.next;
    }

    this.size -= 1;
  }

  search(data) {
    let cur = this.head;
    let count = 0;

    while (cur.data !== data) {
      if (cur.next === this.tail) {
        console.log(`데이터를 찾을 수 없음`);
        return;
      }
      cur = cur.next;
      count += 1;
    }

    console.log(`찾은 데이터는 ${count}번째에 존재함`);
  }

  print() {
    let cur = this.head;

    console.log(`=== 크기 : ${this.getSize()} ===`);
    while (cur !== null) {
      console.log(`현재 노드는 ${cur.data}`);
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

const newLinkedList = new DummyDoubleLinkedList();

newLinkedList.insert(1, "월");
newLinkedList.insert(2, "수");
// newLinkedList.print();
newLinkedList.insert(2, "화");
newLinkedList.print();

newLinkedList.insert(4, "목");
newLinkedList.insert(5, "금");
newLinkedList.print();

newLinkedList.search("목");
