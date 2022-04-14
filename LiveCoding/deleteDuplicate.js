// 정렬되지 않은 정수 리스트가 주어졌을 때 모든 중복된 값을 제거한 새로운 리스트를 리턴하는 함수를 만들어라.

// solution 1 : Set 자료 구조 사용 (순서 유지가 필요 없는 경우)

// function deleteDuplicate(numArr) {
//   const set = new Set();

//   for (let i = 0; i < numArr.length; i += 1) {
//     set.add(numArr[i]);
//   }

//   return [...set];
// }

// solution 2 : 새로운 배열을 만들어 중복된 값이 아닌 것만 담아 반환

function deleteDuplicate(numArr) {
  const newArr = [];

  numArr.forEach((num) => {
    let found = false;

    newArr.forEach((newNum) => {
      if (num === newNum) {
        found = true;
      }
    });
    if (!found) {
      newArr.push(num);
    }
  });

  return newArr;
}

console.log(deleteDuplicate([1, 6, 3, 2, 5, 3, 2, 7, 4, 9, 10]));
