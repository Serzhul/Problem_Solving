const A = new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
console.log(A);

const B = new Set([3, 4, 5, 6, 7, 2, 3, 4, 5]);
console.log(B);

// 합집합 (Union)
const union = new Set([...A, ...B]);
console.log("합집합 :", union);

// 교집합 (Intersection)
const intersection = new Set([...A].filter((val) => B.has(val)));
console.log("교집합 : ", intersection);

// 차집합 (difference)
const diffAB = new Set([...A].filter((val) => !B.has(val)));
console.log("차집합 (A-B) : ", diffAB);

const diffBA = new Set([...B].filter((val) => !A.has(val)));
console.log("차집합 (B-A): ", diffBA);

// 대칭 차집합 (Symmetric difference) : 둘 중 한 집합에는 속하지만 모두에는 속하지 않는 원소들
const symmetricDiff = new Set([...diffAB, ...diffBA]);
console.log("대칭 차집합 : ", symmetricDiff);

// 확대집합 (Superset) : A의 모든 원소가 B에도 속하는 집합  혹은 그 반대)
let isSuperset = true;
for (let el of B) {
  if (!A.has(el)) {
    isSuperSet = false;
    break;
  }
}

if (isSuperset) {
  console.log("A는 B의 superset입니다.");
} else {
  console.log("A는 B의 superset이 아닙니다.");
}
