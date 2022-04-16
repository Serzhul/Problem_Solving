/* eslint-disable no-unused-vars */
/**  Node 클래스 명세
 *  add, remove 메서드 존재
 *  data를 생성자로 받아 생성하고, 자식 노드들을 저장해 두기 위한 배열을 생성
 * */

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add 사용
  add(data) {
    this.children.push(new Node(data));
  }

  // data와 일치하지 않는 데이터 삭제 (filter)
  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}
