// 사이클 단어는 특정 단어를 원형으로 쓴 단어로, 단어의 한 부분을 골라 시계방향으로 읽었을 때 동일하면 동일한 단어다.

const set = new Set();

const N = 5;
const arr = ["picture", "turepic", "icturep", "word", "ordw"];

let count = 0;

arr.forEach((el) => {
  let len = el.length;

  if (!set.has(el)) {
    count += 1;
    set.add(el);

    while (len) {
      el = el.substring(1) + el[0];
      set.add(el);
      len -= 1;
    }
  }
});

console.log(set);
console.log(count);
